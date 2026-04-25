import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "quiet";

type ButtonLinkProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-cta text-white shadow-soft hover:bg-brand-cta/90 focus-visible:outline-brand-cta",
  secondary:
    "border border-brand-lavender/45 bg-white/65 text-brand-taupe hover:border-brand-lavender hover:bg-white focus-visible:outline-brand-lavender",
  quiet:
    "text-brand-taupe underline decoration-brand-lavender/45 underline-offset-4 hover:text-brand-cta focus-visible:outline-brand-lavender",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  if (!href) {
    return null;
  }

  const isExternal = href.startsWith("http");
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-body text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
