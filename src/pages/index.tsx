import Layout from "@components/Layout";
import HeroSection from "@components/sections/HeroSection";
import AboutMeSection from "@components/sections/AboutMeSection";
import ContactMeSection from "@components/sections/ContactMeSection";
import PortfolioSection from "@components/sections/PortfolioSection";

export default function Home() {
  return (
    <Layout>
      {/* Hero section */}
      <HeroSection />
      {/* About me section */}
      <AboutMeSection />
      {/* Portfolio section */}
      <PortfolioSection />
      {/* Contact me section */}
      <ContactMeSection />
    </Layout>
  );
}
