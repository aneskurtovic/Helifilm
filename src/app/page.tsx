import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Equipment from "@/components/Equipment";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Portfolio />
      <Process />
      <Equipment />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Helifilm Produkcija",
            description:
              "Aerial production for Balkan film, tourism, and property. Sarajevo-based, shooting since 2013.",
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
