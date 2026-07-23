import Link from "next/link";

const NAV_LINKS = [
  { href: "/products", label: "Catálogo" },
  { href: "/blog", label: "Historias" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-washi/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-torii text-washi">
            <span className="h-3 w-3 rounded-full bg-washi" />
          </span>
          <span className="font-serif text-xl tracking-wide text-ink">
            Japan Bridge
          </span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-torii"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
