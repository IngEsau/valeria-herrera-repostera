import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FeaturedProduct, NavigationItem } from "../../types/content";

type MobileNavigationProps = {
  navigation: NavigationItem[];
  featuredProducts: FeaturedProduct[];
  featuredSectionId: string;
  onNavigate: () => void;
};

const linkClasses =
  "relative flex min-h-16 items-center px-3 py-5 font-body text-base font-semibold text-brand-taupe transition hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender";

export function MobileNavigation({
  navigation,
  featuredProducts,
  featuredSectionId,
  onNavigate,
}: MobileNavigationProps) {
  const [activeHref, setActiveHref] = useState("#inicio");

  useEffect(() => {
    const updateActiveHref = () => setActiveHref(window.location.hash || "#inicio");
    updateActiveHref();
    window.addEventListener("hashchange", updateActiveHref);
    return () => window.removeEventListener("hashchange", updateActiveHref);
  }, []);

  return (
    <nav aria-label="Navegación móvil" className="w-full">
      <ul className="divide-y divide-brand-taupe/15 border-b border-brand-taupe/15">
        {navigation.map((item) => {
          const isFeatured = item.href === `#${featuredSectionId}`;
          const isActive = item.href === activeHref ||
            (isFeatured && featuredProducts.some((product) => `#${product.id}` === activeHref));
          const activeClasses = isActive
            ? " text-brand-lavender before:absolute before:left-0 before:h-4 before:w-0.5 before:bg-brand-lavender before:content-['']"
            : "";

          return (
          <li key={item.href}>
            {item.href === `#${featuredSectionId}` && featuredProducts.length ? (
              <details className="group">
                <summary className={`${linkClasses}${activeClasses} cursor-pointer list-none justify-between gap-3 [&::-webkit-details-marker]:hidden`}>
                  {item.label}
                  <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="mb-5 ml-3 grid gap-1 border-l border-brand-lavender/30 pl-3">
                  {featuredProducts.map((product) => (
                    <li key={product.id}>
                      <a
                        href={`#${product.id}`}
                        onClick={onNavigate}
                        className="block rounded-lg px-4 py-3 font-body text-sm leading-6 text-brand-taupe transition hover:bg-white hover:text-brand-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lavender"
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <a href={item.href} onClick={onNavigate} aria-current={isActive ? "location" : undefined} className={`${linkClasses}${activeClasses}`}>
                {item.label}
              </a>
            )}
          </li>
          );
        })}
      </ul>
    </nav>
  );
}
