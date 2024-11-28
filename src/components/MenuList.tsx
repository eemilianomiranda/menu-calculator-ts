import { Producto } from "../types";

type MenuProps = {
  menu: Producto[];
  selectedMenu: (producto: Producto) => void;
};

const MenuList = ({ menu, selectedMenu }: MenuProps) => {
  return (
    <div className="flex flex-col mx-8 gap-4 w-6/12">
      {menu.map((comida: Producto) => (
        <ul
          key={comida.id}
          className=" p-3 border border-red-700 rounded-md hover:scale-105 transition-all duration-300 hover:cursor-pointer"
          onClick={() => selectedMenu(comida)}
        >
          <li className="flex justify-between">
            <span>{comida.nombre}</span>
            <span className="font-bold">GS.{comida.precio}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MenuList;
