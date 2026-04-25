import type { FeaturedProduct } from "../../types/content";
import { ButtonLink } from "./ButtonLink";

type ProductCardProps = {
  product: FeaturedProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-soft">
      <div className="aspect-[1.45/1] overflow-hidden bg-brand-cream">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="text-xl font-semibold leading-snug text-brand-taupe">
            {product.name}
          </h3>
          <p className="text-sm leading-7 text-brand-taupe/80">
            {product.description}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {product.price ? (
            <p className="font-body text-lg font-semibold text-brand-cta">
              {product.price}
            </p>
          ) : null}
          <ButtonLink href={product.ctaHref} variant="quiet" className="px-0">
            {product.ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
