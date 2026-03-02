export interface Equipment {
  id: string;
  name: string;
  image: string;
  specs: string[];
  description: {
    en: string;
    bs: string;
  };
}

export const equipment: Equipment[] = [
  {
    id: "1",
    name: "DJI Inspire 3",
    image: "/images/equipment-1.jpg",
    specs: ["8K Video", "Full-Frame Sensor", "28min Flight Time", "Wind Resistance Level 5"],
    description: {
      en: "Our flagship cinema drone for professional film and television production. Delivers unmatched image quality with full-frame 8K.",
      bs: "Naš vodeći filmski dron za profesionalnu filmsku i televizijsku produkciju. Pruža nenadmašan kvalitet slike sa full-frame 8K.",
    },
  },
  {
    id: "2",
    name: "DJI Mavic 3 Pro",
    image: "/images/equipment-2.jpg",
    specs: ["5.1K Video", "Triple Camera", "43min Flight Time", "Hasselblad Camera"],
    description: {
      en: "Versatile tri-camera system perfect for real estate, events, and commercial projects requiring mobility and quality.",
      bs: "Svestrani sistem sa tri kamere, savršen za nekretnine, događaje i komercijalne projekte koji zahtijevaju mobilnost i kvalitet.",
    },
  },
  {
    id: "3",
    name: "DJI FPV Drone",
    image: "/images/equipment-3.jpg",
    specs: ["4K/120fps", "150km/h Speed", "Immersive FPV", "Emergency Brake"],
    description: {
      en: "High-speed cinematic FPV drone for dynamic, immersive shots that push creative boundaries.",
      bs: "Brzi kinematski FPV dron za dinamične, imerzivne snimke koji pomiču granice kreativnosti.",
    },
  },
  {
    id: "4",
    name: "DJI Ronin 4D",
    image: "/images/equipment-4.jpg",
    specs: ["6K ProRes", "4-Axis Stabilization", "LiDAR Focus", "Internal Recording"],
    description: {
      en: "Professional cinema camera with integrated gimbal for ground-level cinematography that matches our aerial quality.",
      bs: "Profesionalna filmska kamera sa integrisanim gimbalom za prizemnu kinematografiju koja odgovara našem aerijalnom kvalitetu.",
    },
  },
];
