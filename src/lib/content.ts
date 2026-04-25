import featuredProductsJson from "../content/featured-products.json";
import siteConfigJson from "../content/site-config.json";
import type { FeaturedProduct, SiteConfig } from "../types/content";

export const siteConfig = siteConfigJson as SiteConfig;
export const featuredProducts = featuredProductsJson as FeaturedProduct[];
