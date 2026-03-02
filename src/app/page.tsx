import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Equipment from "@/components/Equipment";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Equipment />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Helifilm Produkcija",
            description:
              "Professional drone videography and aerial cinematography based in Sarajevo, Bosnia & Herzegovina.",
            url: "https://www.helifilm.ba",
            telephone: "+38761288221",
            email: "info@helifilm.ba",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Sarajevo",
              addressCountry: "BA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.8563,
              longitude: 18.387,
            },
            sameAs: [
              "https://www.facebook.com/HelifilmProdukcija",
              "https://www.youtube.com/user/HajrudinSuljic",
              "https://www.tiktok.com/@helifilm",
              "https://www.instagram.com/hajrudin26",
            ],
            image: "https://www.helifilm.ba/images/logo.png",
            priceRange: "$$",
            openingHours: "Mo-Fr 09:00-18:00",
          }),
        }}
      />
    </main>
  );
}
