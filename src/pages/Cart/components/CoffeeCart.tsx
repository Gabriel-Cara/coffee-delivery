import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeContext";

interface CoffeeCartProps {
  id: number;
  image: string;
  title: string;
  price: number;
  amount: number;
}

export function CoffeeCart({ id, image, title, price, amount }: CoffeeCartProps) {
  const { decrementCoffeeAmount, incrementCoffeeAmount, removeCoffeeFromCart } = useContext(CoffeeContext);

  function handleDecrementCoffee() {
    if(amount > 1) {
      decrementCoffeeAmount({ id, amount, title, price, image });
    }
  }

  function handleIncrementCoffee() {
    incrementCoffeeAmount({ id, amount, title, price, image });
  }

  function handleRemoveCoffee() {
    removeCoffeeFromCart({ id, amount, title, price, image });
  }

  

  return (
    <div className="flex items-start justify-between">
      {/* DETALHES CAFÉ */}
      <div className="flex gap-5">
        <img src={image} className="w-16 h-16" />
        
        <div className="flex flex-col gap-2">
          <p className="text-base-subtitle">{title}</p>
          {/* BUTTONS */}
          <div className="flex gap-2">
            <label className="bg-base-button flex items-center gap-1 p-2 rounded-md">
              <button
                className="text-purple hover:text-purple-dark cursor-pointer"
                onClick={handleDecrementCoffee}
              >
                <Minus size={14} weight="bold" />
              </button>
              <input
                className="text-base-title no-spinner w-6 text-center"
                value={amount}
                readOnly
              />
              <button
                className="text-purple hover:text-purple-dark cursor-pointer"
                onClick={handleIncrementCoffee}
              >
                <Plus size={14} weight="bold" />
              </button>
            </label>
            <button
              className="flex gap-1 items-center rounded-md bg-base-button hover:bg-base-hover cursor-pointer px-2"
              onClick={handleRemoveCoffee}
            >
              <Trash size={16} className="text-purple has-hover:text-purple-dark" />
              <span className="text-base-text uppercase text-xs">Remover</span>
            </button>
          </div>
        </div>
      </div>

      <span className="text-base-text font-bold">R$ {price.toFixed(2).replace(".",",")}</span>
    </div>
  );
}
