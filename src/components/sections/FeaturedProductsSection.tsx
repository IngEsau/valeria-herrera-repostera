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
  return (
    <section id={content.sectionId} className="bg-brand-cream py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          align="center"
          decorated
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
