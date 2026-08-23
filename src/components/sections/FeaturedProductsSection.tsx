import type {
  FeaturedProduct,
  FeaturedProductsContent,
} from "../../types/content";
import { Container } from "../ui/Container";
import { ProductCard } from "../ui/ProductCard";
import { SectionHeading } from "../ui/SectionHeading";

type FeaturedProductsSectionProps = {
  content: FeaturedProductsContent;
  products: FeaturedProduct[];
};

export function FeaturedProductsSection({
  content,
  products,
}: FeaturedProductsSectionProps) {
  const featuredProducts = products.filter((product) => product.featured);
  const catalogProducts = products.filter((product) => !product.featured);

  return (
    <section
      id={content.sectionId}
      className="scroll-mt-24 bg-brand-cream py-16 sm:py-20 lg:scroll-mt-28"
    >
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
          decorated
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quote={content.quote}
            />
          ))}
        </div>

        <div
          id={content.catalog.sectionId}
          className="mt-20 scroll-mt-24 border-t border-brand-lavender/15 pt-16 sm:mt-24 sm:pt-20 lg:scroll-mt-28"
        >
          <SectionHeading
            eyebrow={content.catalog.eyebrow}
            title={content.catalog.title}
            description={content.catalog.description}
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {catalogProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quote={content.quote}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
