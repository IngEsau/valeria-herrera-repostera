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
  logoStacked?: string;
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

export type HeroTitleVariant = {
  firstLine: string;
  secondLine: string;
  accent: string;
};

export type HeroContent = {
  eyebrow: string;
  title: {
    desktop: HeroTitleVariant;
    mobile: HeroTitleVariant;
  };
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  heroImage: string;
  heroImageAlt: string;
};

export type AboutGalleryItem = {
  image: string;
  imageAlt: string;
};

export type AboutContent = {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  secondaryText: string;
  gallery: AboutGalleryItem[];
  cta: Cta;
};

export type CatalogContent = {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  pageSize: number;
};

export type ProductQuoteContent = {
  priceLabel: string;
  emailAddress: string;
  emailCtaLabel: string;
};

export type FeaturedProductsContent = {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  catalog: CatalogContent;
  quote: ProductQuoteContent;
};

export type ContactContent = {
  sectionId: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  emailCta: Cta;
};

export type FooterContent = {
  brandLine: string;
  copyright: string;
  serviceAreaLabel: string;
  serviceArea: string;
  hoursLabel: string;
  hours: string;
  instagramUrl?: string;
  emailUrl?: string;
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
  category: string;
  description: string;
  price: string;
  priceAmount: number;
  servings: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  featured: boolean;
  catalogLast?: boolean;
};
