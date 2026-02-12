import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

import { Link } from "react-router";

import { MapPin, ShoppingCart } from "phosphor-react";

import logoSvg from "../../assets/logo.svg";

export function Navbar() {
  const { cart } = useContext(CoffeeContext);

  return (
    <header className="flex items-center justify-between py-8 px-4 md:px-10 lg:px-40">
      <Link to="/">
        <img src={logoSvg} alt="Logotipo Coffee Delivery" />
      </Link>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 p-2 bg-purple-light rounded-md text-purple-dark">
          <MapPin className="text-purple" size={24} weight="fill" /> Jundiaí, SP
        </span>
        <Link to="/cart">
          <button className="bg-yellow-light p-2 rounded-md inset-shadow-sm inset-shadow-yellow-dark/35 hover:inset-shadow-yellow-dark/65 cursor-pointer transiton duration-200 relative" disabled={cart.length === 0}>
            {cart.length > 0 && (
              <span className="flex justify-center items-center text-xs w-5 h-5 bg-yellow-dark text-base-background rounded-full absolute -top-2 -right-2">
                {cart.length}
              </span>
            )}
            <ShoppingCart
              className="text-yellow-dark"
              size={24}
              weight="fill"
            />
          </button>
        </Link>
      </div>
    </header>
  );
}
