import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import heroSvg from "../../assets/hero.png";

import expressoTradicional from "../../assets/Expresso.png";
import expressoAmericano from "../../assets/Americano.png";
import expressoCremoso from "../../assets/Expresso Cremoso.png";
import expressoGelado from "../../assets/Café Gelado.png";
import cafeComLeite from "../../assets/Café com Leite.png";
import latte from "../../assets/Latte.png";
import capuccino from "../../assets/Capuccino.png";
import macchiato from "../../assets/Macchiato.png";
import mocaccino from "../../assets/Mochaccino.png";
import chocolateQuente from "../../assets/Chocolate Quente.png";
import cubano from "../../assets/Cubano.png";
import havaiano from "../../assets/Havaiano.png";
import arabe from "../../assets/Árabe.png";
import irlandes from "../../assets/Irlandês.png";

import { Item } from "./components/Item";
import { CoffeeCard } from "./components/CoffeeCard";

const coffeeList = [
  {
    id: 1,
    image: expressoTradicional,
    title: "Expresso Tradicional",
    tags: ["tradicional"],
    desc: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    image: expressoAmericano,
    title: "Expresso Americano",
    tags: ["tradicional"],
    desc: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: 3,
    image: expressoCremoso,
    title: "Expresso Cremoso",
    tags: ["tradicional"],
    desc: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 4,
    image: expressoGelado,
    title: "Expresso Gelado",
    tags: ["tradicional", "gelado"],
    desc: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: 5,
    image: cafeComLeite,
    title: "Café com Leite",
    tags: ["tradicional", "com leite"],
    desc: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    image: latte,
    title: "Latte",
    tags: ["tradicional", "com leite"],
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    image: capuccino,
    title: "Capuccino",
    tags: ["tradicional", "com leite"],
    desc: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    image: macchiato,
    title: "Macchiato",
    tags: ["tradicional", "com leite"],
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    image: mocaccino,
    title: "Mocaccino",
    tags: ["tradicional", "com leite"],
    desc: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 10,
    image: chocolateQuente,
    title: "Chocolate Quente",
    tags: ["tradicional", "com leite"],
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: 11,
    image: cubano,
    title: "Cubano",
    tags: ["especial", "alcoólico", "gelado"],
    desc: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: 12,
    image: havaiano,
    title: "Havaiano",
    tags: ["especial"],
    desc: "Bebida adocicada preparada com café e leite de côco",
    price: 9.9,
  },
  {
    id: 13,
    image: arabe,
    title: "Árabe",
    tags: ["especial"],
    desc: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: 14,
    image: irlandes,
    title: "Irlandês",
    tags: ["especial", "alcoólico"],
    desc: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];

export function Home() {
  return (
    <main>
      {/* HERO */}
      <div
        id="hero"
        className="bg-[url(../assets/bg-hero.svg)] bg-cover bg-no-repeat min-h-[544px] grid grid-cols-1 lg:grid-cols-2 items-center gap-14 px-4 lg:px-40 md:px-10"
      >
        <aside>
          <h1 className="text-4xl md:text-5xl font-bold text-base-title">
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p className="text-base-subtitle text-lg md:text-xl mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2.5 gap-y-5 mt-16 mr-5">
            <Item
              desc="Compra simples e segura"
              background="bg-yellow-dark"
              icon={ShoppingCart}
            />
            <Item
              desc="Embalagem mantém o café intacto"
              background="bg-base-text"
              icon={Package}
            />
            <Item
              desc="Entrega rápida e rastreada"
              background="bg-yellow"
              icon={Timer}
            />
            <Item
              desc="O café chega fresquinho até você"
              background="bg-purple"
              icon={Coffee}
            />
          </div>
        </aside>
        <img src={heroSvg} alt="" />
      </div>

      {/* COFFEE */}
      <div
        id="coffee-list"
        className=" bg-base-background px-4 lg:px-40 md:px-10 mt-8 mb-40"
      >
        <h2 className="text-base-title text-4xl font-bold">Nossos Cafés</h2>
        <div className="flex flex-wrap justify-start gap-6 mt-14">
          {coffeeList.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              title={coffee.title}
              desc={coffee.desc}
              price={coffee.price}
              image={coffee.image}
              tags={coffee.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
