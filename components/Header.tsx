import Link from "next/link";
import CartButton from "@/components/CartButton";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/products", label: "Catálogo" },
  { href: "/blog", label: "Historias" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-background" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            {SITE.name}
          </span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
