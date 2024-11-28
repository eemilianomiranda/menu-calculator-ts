import { useEffect, useState } from "react";
import MenuList from "./components/MenuList";
import ShowMenuSelected from "./components/ShowMenuSelected";
import { Producto, initialMenu, MenuSelected } from "./types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [selectedMenu, setSelectedMenu] = useState<MenuSelected[]>([]);
  const [isBuy, setIsBuy] = useState(false);

  useEffect(() => {
    if (isBuy) {
      toast.success("Compra realizada con éxito");
      setSelectedMenu([]);
      setIsBuy(false);
      console.log(isBuy);
    }
  }, [isBuy]);
  

  const deleteToMenu = (id: Producto["id"]) => {
    const newSelectMenuList = selectedMenu.filter(
      (item: Producto) => item.id !== id
    );
    setSelectedMenu(newSelectMenuList);
    toast.success("El producto fue eliminado de la lista");
  };

  const addToMenu = (producto: Producto): void => {
    setSelectedMenu((prevSelectedMenu) => {
      const productoIsTrue = prevSelectedMenu.find(
        (item) => item.id === producto.id
      );

      if (productoIsTrue) {
        // Si el producto ya está en el carrito, actualizamos la cantidad y recalculamos los totales
        return prevSelectedMenu.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
                total: (item.cantidad + producto.cantidad) * item.precio,
                subtotal: (item.cantidad + producto.cantidad) * item.precio,
              }
            : item
        );
      } else {
        // Si el producto no existe en el carrito, lo agregamos
        const cartProducto: MenuSelected = {
          ...producto,
          cantidad: 1,
          total: producto.cantidad * producto.precio,
          subtotal: producto.cantidad * producto.precio,
        };

        return [...prevSelectedMenu, cartProducto];
      }
    });
  };

  return (
    <div className="flex justify-between h-screen p-24">
      <MenuList menu={initialMenu} selectedMenu={addToMenu} />
      <ShowMenuSelected
        menu={selectedMenu || null}
        deleteMenu={deleteToMenu}
        isBuy={setIsBuy}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
