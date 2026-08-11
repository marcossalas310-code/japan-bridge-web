/** Formatea un monto en pesos chilenos: 89990 → "$89.990" */
export function formatCLP(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(amount);
}
