import { PageShell } from "./components/layout/PageShell";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FeaturedProductsSection } from "./components/sections/FeaturedProductsSection";
import { HeroSection } from "./components/sections/HeroSection";
import { featuredProducts, siteConfig } from "./lib/content";

export default function App() {
  return (
    <PageShell
      brand={siteConfig.brand}
      navigation={siteConfig.navigation}
      primaryCta={siteConfig.hero.primaryCta}
      footer={siteConfig.footer}
    >
      <HeroSection content={siteConfig.hero} />
      <AboutSection content={siteConfig.about} />
      <FeaturedProductsSection
        content={siteConfig.featuredProducts}
        products={featuredProducts}
      />
      <ContactSection content={siteConfig.contact} />
    </PageShell>
  );
}
