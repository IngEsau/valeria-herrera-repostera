import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [catalogPage, setCatalogPage] = useState(1);
  const catalogRef = useRef<HTMLDivElement>(null);
  const featuredProducts = products.filter((product) => product.featured);
  const catalogProducts = products
    .filter((product) => !product.featured)
    .sort((firstProduct, secondProduct) => {
      if (firstProduct.catalogLast !== secondProduct.catalogLast) {
        return firstProduct.catalogLast ? 1 : -1;
      }

      return secondProduct.priceAmount - firstProduct.priceAmount;
    });
  const totalCatalogPages = Math.ceil(
    catalogProducts.length / content.catalog.pageSize,
  );
  const currentCatalogPage = Math.min(catalogPage, totalCatalogPages || 1);
  const catalogPageStart =
    (currentCatalogPage - 1) * content.catalog.pageSize;
  const visibleCatalogProducts = catalogProducts.slice(
    catalogPageStart,
    catalogPageStart + content.catalog.pageSize,
  );

  const changeCatalogPage = (nextPage: number) => {
    if (
      nextPage === currentCatalogPage ||
      nextPage < 1 ||
      nextPage > totalCatalogPages
    ) {
      return;
    }

    setCatalogPage(nextPage);
    window.requestAnimationFrame(() => {
      catalogRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

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
          ref={catalogRef}
          className="mt-20 scroll-mt-24 border-t border-brand-lavender/15 pt-16 sm:mt-24 sm:pt-20 lg:scroll-mt-28"
        >
          <SectionHeading
            eyebrow={content.catalog.eyebrow}
            title={content.catalog.title}
            description={content.catalog.description}
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleCatalogProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quote={content.quote}
              />
            ))}
          </div>
          {totalCatalogPages > 1 ? (
            <nav
              aria-label="Paginación del catálogo"
              className="mt-10 flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Página anterior"
                  title="Página anterior"
                  disabled={currentCatalogPage === 1}
                  onClick={() => changeCatalogPage(currentCatalogPage - 1)}
                  className="flex size-11 items-center justify-center rounded-full border border-brand-lavender/45 bg-white text-brand-taupe transition hover:border-brand-lavender hover:text-brand-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft className="size-5" strokeWidth={2} />
                </button>

                {Array.from({ length: totalCatalogPages }, (_, index) => {
                  const pageNumber = index + 1;
                  const isCurrentPage = pageNumber === currentCatalogPage;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      aria-label={`Ir a la página ${pageNumber}`}
                      aria-current={isCurrentPage ? "page" : undefined}
                      onClick={() => changeCatalogPage(pageNumber)}
                      className={`flex size-11 items-center justify-center rounded-full font-body text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender ${
                        isCurrentPage
                          ? "bg-brand-lavender text-white"
                          : "border border-brand-lavender/45 bg-white text-brand-taupe hover:border-brand-lavender hover:text-brand-lavender"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  type="button"
                  aria-label="Página siguiente"
                  title="Página siguiente"
                  disabled={currentCatalogPage === totalCatalogPages}
                  onClick={() => changeCatalogPage(currentCatalogPage + 1)}
                  className="flex size-11 items-center justify-center rounded-full border border-brand-lavender/45 bg-white text-brand-taupe transition hover:border-brand-lavender hover:text-brand-lavender focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronRight className="size-5" strokeWidth={2} />
                </button>
              </div>
              <p
                className="font-body text-sm text-brand-taupe/75"
                aria-live="polite"
              >
                Página {currentCatalogPage} de {totalCatalogPages}
              </p>
            </nav>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
