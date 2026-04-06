import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiciosSection";
import Testimonios from "./components/Testimonios";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "CantabriaPro - Reformas y Servicios Generales",
    "image": "https://tusitio.com/logo.png", // Luego poner el logo
    "telephone": "+34691426670",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Virgen de la Paloma 3",
      "addressLocality": "Santander",
      "addressRegion": "Cantabria",
      "postalCode": "39007",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.4623, // Coordenadas aproximadas de Santander
      "longitude": -3.8100
    },
    "description": "Expertos en reformas de cocinas, baños, pintura y servicios generales en Santander. Presupuesto en 24h sin compromiso.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "areaServed": [
      { "@type": "City", "name": "Santander" },
      { "@type": "City", "name": "Bezana" },
      { "@type": "City", "name": "Camargo" },
      { "@type": "City", "name": "Astillero" }
    ]
  };

  return (
    <>

    {/* Esto inserta el código invisible para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <Testimonios />
        <Proyectos />
        <Footer />
        
      </main>
    </>
  );
}
