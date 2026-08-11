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
  image: string;
  description: string;
  specs: string[];
  blogSlug: string | null;
};

export function getProducts(): Product[] {
  return products as Product[];
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find((p) => p.id === id);
}
