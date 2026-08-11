import Link from "next/link";
import { WHATSAPP_URL, CONTACT, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <span className="font-display text-lg font-semibold text-foreground">
            {SITE.name}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Gadgets con inteligencia artificial real, elegidos uno por uno —
            sin promesas exageradas, con lo que de verdad funciona.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Explorar
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products" className="text-foreground/80 hover:text-accent-2">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-foreground/80 hover:text-accent-2">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-foreground/80 hover:text-accent-2">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-foreground/80 hover:text-accent-2">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Contacto
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground/80">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-2">
                WhatsApp: {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent-2">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {SITE.name}. Tecnología con IA, a tu puerta en Chile.
      </div>
    </footer>
  );
}
