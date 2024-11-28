export type Producto = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

export type MenuSelected = Producto & {
  total: number;
  subtotal: number;
};

export const initialMenu: Producto[] = [
  { id: 1, nombre: "Hamburguesa", precio: 15.000, cantidad: 10 },
  { id: 2, nombre: "Pizza", precio: 25.000, cantidad: 8 },
  { id: 3, nombre: "Ensalada", precio: 12.000, cantidad: 15 },
  { id: 4, nombre: "Papas Fritas", precio: 8.000, cantidad: 20 },
  { id: 5, nombre: "Refresco", precio: 5.000, cantidad: 30 },
  { id: 6, nombre: "Café", precio: 7.500, cantidad: 25 },
  { id: 7, nombre: "Té", precio: 6.000, cantidad: 20 },
  { id: 8, nombre: "Sandwich", precio: 10.000, cantidad: 12 },
  { id: 9, nombre: "Pastel", precio: 15.000, cantidad: 10 },
  { id: 10, nombre: "Helado", precio: 8.500, cantidad: 18 },
];
