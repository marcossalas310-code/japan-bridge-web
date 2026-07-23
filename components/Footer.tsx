import Link from "next/link";
import { WHATSAPP_URL, CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-washi-dark">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <span className="font-serif text-lg text-ink">Japan Bridge</span>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Un puente entre Japón y Chile. Traemos piezas con historia,
            hechas por artesanos que dedicaron su vida al oficio.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/60">
            Explorar
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/products" className="text-ink/80 hover:text-torii">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ink/80 hover:text-torii">
                Historias
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-ink/80 hover:text-torii">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/60">
            Contacto
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-torii">
                WhatsApp: {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-torii">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/10 px-6 py-4 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} Japan Bridge. Piezas importadas directamente desde Japón.
      </div>
    </footer>
  );
}
