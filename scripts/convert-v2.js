const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC_DIR = path.join(process.cwd(), "assets-source", "V2");
const OUT_DIR = path.join(process.cwd(), "public", "images", "Capabilities");

const mapping = [
  { src: "01-Aerial Cinematography.jpg", out: "aerial-cinematography.webp" },
  { src: "02-TourismDestination.jpg", out: "tourism-destination.webp" },
  { src: "03-RealEstateProperty.jpg", out: "real-estate-property.webp" },
  { src: "04-CommercialBrand.jpg", out: "commercial-brand.webp" },
  { src: "05-Event Coverage.jpg", out: "event-coverage.webp" },
  { src: "06-PostProduction.jpg", out: "post-production.webp" },
];

const TARGET_W = 1600;
const TARGET_H = 1067;

(async () => {
  for (const { src, out } of mapping) {
    const srcPath = path.join(SRC_DIR, src);
    const outPath = path.join(OUT_DIR, out);
    const meta = await sharp(srcPath).metadata();
    await sharp(srcPath)
      .rotate()
      .resize(TARGET_W, TARGET_H, { fit: "cover", position: "attention", withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(outPath);
    const outMeta = await sharp(outPath).metadata();
    const stat = fs.statSync(outPath);
    console.log(
      `${src}  (${meta.width}x${meta.height}) -> ${out}  (${outMeta.width}x${outMeta.height}, ${(stat.size / 1024).toFixed(1)} KB)`,
    );
  }

  // Also delete the leftover .png originals in Capabilities — they're 2MB+ AI files no longer used
  const pngs = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".png"));
  for (const p of pngs) {
    fs.unlinkSync(path.join(OUT_DIR, p));
    console.log(`removed legacy AI source: ${p}`);
  }
})();
