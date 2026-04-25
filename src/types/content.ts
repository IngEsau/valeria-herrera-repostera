export type BrandConfig = {
  name: string;
  descriptor: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  headingFont: string;
  bodyFont: string;
  logo?: string;
  logoAlt?: string;
  isotype?: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href?: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  heroImage: string;
  heroImageAlt: string;
};

export type AboutContent = {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  secondaryText: string;
  image: string;
  imageAlt: string;
  cta: Cta;
};

export type FeaturedProductsContent = {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type ContactContent = {
  sectionId: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export type FooterContent = {
  brandLine: string;
  copyright: string;
  instagramUrl?: string;
  whatsappUrl?: string;
};

export type SiteConfig = {
  brand: BrandConfig;
  navigation: NavigationItem[];
  hero: HeroContent;
  about: AboutContent;
  featuredProducts: FeaturedProductsContent;
  contact: ContactContent;
  footer: FooterContent;
};

export type FeaturedProduct = {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};
