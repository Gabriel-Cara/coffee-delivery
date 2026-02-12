import { createContext, useState } from "react";
import { useNavigate } from "react-router";

interface CoffeeProps {
  id: number;
  title: string;
  price: number;
  image: string;
  tags?: string[];
  desc?: string;
  amount: number;
}

interface OrderProps {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: "credit" | "debit" | "money";
}

interface CoffeeContextType {
  cart: CoffeeProps[];
  order: OrderProps;
  incrementCoffeeAmount: (coffee: CoffeeProps) => void;
  decrementCoffeeAmount: (coffee: CoffeeProps) => void;
  removeCoffeeFromCart: (coffee: CoffeeProps) => void;
  createNewOrder: (data: OrderProps) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: React.ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cart, setCart] = useState<CoffeeProps[]>([]);
  const [order, setOrder] = useState<OrderProps>({} as OrderProps);

  const navigate = useNavigate();

  function incrementCoffeeAmount(coffeeToAdd: CoffeeProps) {
    setCart((state) => {
      const coffeeExists = state.find((coffee) => coffee.id === coffeeToAdd.id);

      if (coffeeExists) {
        return state.map((coffee) =>
          coffee.id === coffeeToAdd.id
            ? { ...coffee, amount: coffee.amount + 1 }
            : coffee
        );
      } else {
        console.log(state);
        return [...state, coffeeToAdd];
      }
    });
  }

  function decrementCoffeeAmount(coffeeToRemove: CoffeeProps) {
    setCart((state) =>
      state.map((coffee) =>
        coffee.id === coffeeToRemove.id && coffee.amount > 1
          ? { ...coffee, amount: coffee.amount - 1 }
          : coffee
      )
    );
  }

  function removeCoffeeFromCart(coffeeToRemove: CoffeeProps) {
    setCart((state) => {
      return state.filter((coffee) => coffee.id !== coffeeToRemove.id);
    })
  }

  function createNewOrder(data: OrderProps) {
    setOrder(data)

    navigate("/success");

    setTimeout(() => {
      setCart([]);
    }, 3000);

    console.log(order)
  }

  return (
    <CoffeeContext.Provider value={{ cart, order, incrementCoffeeAmount, decrementCoffeeAmount, removeCoffeeFromCart, createNewOrder}}>
      {children}
    </CoffeeContext.Provider>
  );
}
