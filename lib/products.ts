import products from "@/content/products.json";

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  /** Precio de venta en CLP */
  price: number;
  /** Unidades disponibles. 0 = agotado, se muestra pero no se puede comprar */
  stock: number;
  /**
   * true = todavía no lo tenemos en la mano. Se muestra en el catálogo para
   * anticipar que viene, pero no se puede comprar. Distinto de stock 0, que
   * significa que sí lo tuvimos y se acabó.
   */
  comingSoon?: boolean;
  image: string;
  /** Fotos adicionales para la galería de la ficha de producto */
  gallery?: string[];
  description: string;
  specs: string[];
  blogSlug: string | null;
};

export function getProducts(): Product[] {
  return products as Product[];
}

/**
 * Agrupa por categoría preservando el orden en que aparecen en products.json,
 * para que el orden del catálogo se controle editando ese archivo.
 */
export function getProductsByCategory(): { category: string; products: Product[] }[] {
  const groups: { category: string; products: Product[] }[] = [];
  for (const product of getProducts()) {
    const existing = groups.find((g) => g.category === product.category);
    if (existing) existing.products.push(product);
    else groups.push({ category: product.category, products: [product] });
  }
  return groups;
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find((p) => p.id === id);
}
