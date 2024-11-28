import { useState } from "react";
import { MenuSelected, Producto } from "../types";

type MenuSelectedProps = {
  menu: MenuSelected[];
  deleteMenu: (id: Producto["id"]) => void;
  isBuy: (isBuy: boolean) => void;
};

const ShowMenuSelected = ({ menu, deleteMenu, isBuy }: MenuSelectedProps) => {
  const [propina, setPropina] = useState(0);
  const totalGlobal = menu.reduce(
    (acc, item) => acc + item.total + item.total * propina,
    0
  );
  const subtotal = menu.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div className="flex flex-col p-2 gap-4 w-6/12 border border-red-700 rounded-md">
      <div className="flex-1 text-center overflow-y-scroll px-6">
        {menu.length === 0 ? (
          <span>Aún no has escogido tu comida!</span>
        ) : (
          menu.map((men: MenuSelected) => (
            <div key={men.id} className="flex justify-between py-2 border-b">
              <div className="flex gap-2">
                <span>{men.cantidad}x</span>
                <span>{men.nombre}</span>
              </div>
              <div className="flex items-center gap-4">
                <i
                  className="fas fa-trash hover:text-red-600 cursor-pointer"
                  onClick={() => deleteMenu(men.id)}
                ></i>
                <span>
                  precio
                  <span className="font-bold"> Gs. {men.total}</span>
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {menu.length > 0 && (
        <div className="flex justify-between p-4">
          <div className="flex flex-col pt-4 border-t">
            <div>
              <span className="font-semibold">
                Elija el porcentaje de propina que desea dar:
              </span>

              <div className="flex flex-col mt-2">
                {/* Checklist de 5% */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tip"
                    value="0.05"
                    onChange={() => setPropina(0.05)}
                    className="form-radio text-green-500"
                  />
                  <span>5%</span>
                </label>

                {/* Checklist de 10% */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tip"
                    value="0.1"
                    onChange={() => setPropina(0.1)}
                    className="form-radio text-green-500"
                  />
                  <span>10%</span>
                </label>

                {/* Checklist de 20% */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="tip"
                    value="0.2"
                    onChange={() => setPropina(0.2)}
                    className="form-radio text-green-500"
                  />
                  <span>20%</span>
                </label>
              </div>
            </div>

            <span>Subtotal: {subtotal}</span>

            <span className="font-bold">Total: Gs.{totalGlobal}</span>
          </div>

          <div className="mt-auto">
            <button
              className=" bg-green-500 text-white py-2 rounded-md shadow-lg hover:bg-green-700 p-4 transition-colors"
              onClick={() => isBuy(true)}
            >
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMenuSelected;
