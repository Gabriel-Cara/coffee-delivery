import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import successSvg from "../../assets/success-illustration.svg";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Success() {
  const { order } = useContext(CoffeeContext);

  return (
    <main className="px-4 md:px-10 lg:px-40 bg-base-background">
      <h2 className="text-yellow-dark text-4xl font-bold">
        Uhu! Pedido confirmado
      </h2>
      <p className="text-base-subtitle text-xl mt-1 mb-10">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="flex flex-col md:flex-row gap-[6.375rem] justify-between">
        <div className="p-[1px] bg-gradient-to-r from-yellow to-purple max-h-fit min-w-fit rounded-tl-md rounded-br-md rounded-tr-4xl rounded-bl-4xl">
          <div className="flex flex-col gap-8 p-10 bg-base-background rounded-tl-md rounded-br-md rounded-tr-4xl rounded-bl-4xl">
            {/* ITEM 1 */}
            <div className="flex items-center gap-3">
              <MapPin
                size={36}
                weight="fill"
                className="text-base-background bg-purple rounded-full p-2"
              />
              <p className="text-base-text">
                Entrega em{" "}
                <span className="font-bold">
                  {order.street}, {order.number}
                </span>
                <br />
                {order.neighborhood} - {order.city}, {order.uf}
              </p>
            </div>
            {/* ITEM 2 */}
            <div className="flex items-center gap-3">
              <Timer
                size={36}
                weight="fill"
                className="text-base-background bg-yellow rounded-full p-2"
              />
              <p className="text-base-text">
                Previsão de entrega
                <br />
                <span className="font-bold">20min - 30min</span>
              </p>
            </div>
            {/* ITEM 3 */}
            <div className="flex items-center gap-3">
              <CurrencyDollar
                size={36}
                weight="fill"
                className="text-base-background bg-yellow-dark rounded-full p-2"
              />
              <p className="text-base-text">
                Pagamento na entrega
                <br />
                <span className="font-bold">
                  {order.paymentMethod === "credit"
                    ? "Cartão de Crédito"
                    : order.paymentMethod === "debit"
                    ? "Cartão de Débito"
                    : "Dinheiro"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <img className="object-cover hidden lg:block" src={successSvg} alt="" />
      </div>
    </main>
  );
}
