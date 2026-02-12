import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeContext";

interface CoffeeCardProps {
  id: number;
  title: string;
  desc: string;
  price: number;
  image: string;
  tags: string[];
}

export function CoffeeCard({ id, title, desc, price, image, tags }: CoffeeCardProps) {
  const { incrementCoffeeAmount } = useContext(CoffeeContext);
  const [amount, setAmount] = useState(1);

  function handleDecrementCoffee() {
    if(amount > 1) {
      setAmount(amount - 1);
    }
  }

  function handleIncrementCoffee() {
    setAmount(amount + 1);
  }

  function handleAddToCart() {
    incrementCoffeeAmount({ id, amount, title, price, image, tags, desc });
  }

  return (
    <div className="bg-base-card rounded-tr-4xl rounded-tl-md rounded-bl-4xl rounded-br-md max-w-[16rem] relative">
      <div className="flex flex-col justify-center items-center p-5 relative -top-[40px]">
        <img src={image} />
        <div className="flex gap-1 mt-3 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xxsm text-yellow-dark bg-yellow-light py-1 px-2 rounded-full font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base-title font-bold text-xl text-center">{title}</h3>
        <p className="text-base-label text-sm mt-2 mb-8 text-center">{desc}</p>

        <div className="flex flex-nowrap items-center gap-6">
          <span className="flex text-sm items-center text-base-text gap-1">
            R${" "}
            <strong className="text-2xl">
              {price.toFixed(2).replace(".", ",")}
            </strong>
          </span>

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
              className="bg-purple-dark hover:bg-purple p-2 rounded-md transition duration-200 cursor-pointer"
              onClick={handleAddToCart}
            >
              <ShoppingCart
                size={22}
                weight="fill"
                className="text-base-background"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
