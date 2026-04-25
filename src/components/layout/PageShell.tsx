import type { ReactNode } from "react";
import type {
  BrandConfig,
  Cta,
  FooterContent,
  NavigationItem,
} from "../../types/content";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = {
  brand: BrandConfig;
  navigation: NavigationItem[];
  primaryCta: Cta;
  footer: FooterContent;
  children: ReactNode;
};

export function PageShell({
  brand,
  navigation,
  primaryCta,
  footer,
  children,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-brand-cream font-body text-brand-taupe">
      <Header brand={brand} navigation={navigation} primaryCta={primaryCta} />
      <main>{children}</main>
      <Footer brand={brand} navigation={navigation} content={footer} />
    </div>
  );
}
