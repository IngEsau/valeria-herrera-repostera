import { Mail } from "lucide-react";
import type {
  FeaturedProduct,
  ProductQuoteContent,
} from "../../types/content";
import { WhatsAppIcon } from "./BrandIcons";
import { ButtonLink } from "./ButtonLink";

type ProductCardProps = {
  product: FeaturedProduct;
  quote: ProductQuoteContent;
};

export function ProductCard({ product, quote }: ProductCardProps) {
  const emailSubject = encodeURIComponent(`Cotización: ${product.name}`);
  const emailHref = `mailto:${quote.emailAddress}?subject=${emailSubject}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-soft">
      <div className="aspect-[4/3] overflow-hidden bg-brand-cream">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center transition duration-300 hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-1 flex-col">
          <p className="font-body text-xs font-semibold uppercase text-brand-lavender">
            {product.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-snug text-brand-taupe">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-brand-taupe/80">
            {product.description}
          </p>
        </div>
        <div className="mt-6 border-t border-brand-lavender/15 pt-5">
          <p className="font-body text-xl font-semibold text-brand-cta">
            {product.price}
          </p>
          <p className="mt-1 font-body text-xs leading-5 text-brand-taupe/70">
            {quote.priceLabel}
          </p>
          <div className="mt-5 grid gap-2">
            <ButtonLink
              href={product.ctaHref}
              className="w-full px-4"
              icon={<WhatsAppIcon className="size-4 text-white" />}
            >
              {product.ctaLabel}
            </ButtonLink>
            <ButtonLink
              href={emailHref}
              variant="quiet"
              className="w-full px-3"
              icon={<Mail className="size-4" strokeWidth={2} />}
            >
              {quote.emailCtaLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
