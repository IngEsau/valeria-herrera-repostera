import type { ReactNode } from "react";
import type {
  BrandConfig,
  Cta,
  FooterContent,
  FeaturedProduct,
  NavigationItem,
} from "../../types/content";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = {
  brand: BrandConfig;
  navigation: NavigationItem[];
  primaryCta: Cta;
  footer: FooterContent;
  featuredProducts: FeaturedProduct[];
  featuredSectionId: string;
  children: ReactNode;
};

export function PageShell({
  brand,
  navigation,
  primaryCta,
  footer,
  featuredProducts,
  featuredSectionId,
  children,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-brand-cream font-body text-brand-taupe">
      <Header
        brand={brand}
        navigation={navigation}
        primaryCta={primaryCta}
        featuredProducts={featuredProducts}
        featuredSectionId={featuredSectionId}
      />
      <main>{children}</main>
      <Footer brand={brand} navigation={navigation} content={footer} />
    </div>
  );
}
