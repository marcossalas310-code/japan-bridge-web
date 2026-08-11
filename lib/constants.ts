export const SITE = {
  name: "Sora",
  tagline: "Tecnología accesible para el día a día",
};

export const CONTACT = {
  email: "contacto@sorastores.com",
  phone: "+56945585904",
  phoneDisplay: "+56 9 4558 5904",
  location: "Las Condes, Santiago de Chile",
};

const whatsappNumber = CONTACT.phone.replace(/[^\d]/g, "");
export const WHATSAPP_URL = `https://wa.me/${whatsappNumber}`;

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrpzqojw";

/**
 * Configuración de envío. Ajustá estos valores cuando tengas tarifas reales
 * (Chilexpress / Starken / entrega en mano).
 */
export const SHIPPING = {
  /** Costo fijo de envío en CLP */
  flatRate: 4990,
  /** Sobre este monto de subtotal, el envío es gratis. null = nunca gratis */
  freeOver: 100000,
};

export function shippingCostFor(subtotal: number): number {
  if (subtotal <= 0) return 0;
  if (SHIPPING.freeOver !== null && subtotal >= SHIPPING.freeOver) return 0;
  return SHIPPING.flatRate;
}
