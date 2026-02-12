import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { formatToReal } from "../../utils/formatToReal";

import { Input } from "./components/Input";
import { Radio } from "./components/Radio";
import { CoffeeCart } from "./components/CoffeeCart";

const orderFormValidationSchema = z.object({
  cep: z.string().min(8, "CEP inválido"),
  street: z.string().min(1, "Digite o nome da rua"),
  number: z.string().min(1, "Digite o número da rua"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Digite o bairro"),
  city: z.string().min(1, "Digite a cidade"),
  uf: z.string().min(1, "Selecione o estado"),
  paymentMethod: z.enum(
    ["credit", "debit", "money"],
    "Selecione o meio de pagamento"
  ),
});

type OrderFormData = z.infer<typeof orderFormValidationSchema>;

export function Cart() {
  const { cart, createNewOrder } = useContext(CoffeeContext);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);

  const navigate = useNavigate();

  const newOrderForm = useForm({
    resolver: zodResolver(orderFormValidationSchema),
  });

  const { register, handleSubmit, formState: { errors } } = newOrderForm;

  // CALCULATING TOTAL PRICE
  useEffect(() => {
    setTotalItemsPrice(
      cart.reduce((acc, coffee) => acc + coffee.price * coffee.amount, 0)
    );
  }, [totalItemsPrice, cart]);

  const totalPrice = totalItemsPrice + 3.5;

  // CHECKING IF CART IS EMPTY AND REDIRECTING
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart]);

  function handleSubmitForm(data: OrderFormData) {
    createNewOrder(data);
  }

  return (
    <main className="flex flex-col lg:flex-row gap-8 min-h-screen px-4 lg:px-40 md:px-10">
      {/* INFOS */}
      <aside className="flex-1">
        <h3 className="text-base-title text-lg font-bold">
          Complete seu pedido
        </h3>
        <div className="bg-base-card rounded-md p-10 mt-4">
          <header className="flex flex-start gap-2">
            <MapPinLine size={22} className="text-yellow-dark" />
            <div>
              <h4 className="text-base-subtitle">Endereço de entrega</h4>
              <p className="text-base-text text-sm">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col gap-4 mt-8"
            id="order"
          >
            <Input
              placeholder="CEP"
              className="max-w-[12.5rem]"
              required
              {...register("cep")}
            />
            {errors.cep && <span className="text-red-500">{errors.cep.message}</span>}
            <Input
              placeholder="Rua"
              className="flex-1"
              required
              {...register("street")}
            />
            {errors.street && <span className="text-red-500">{errors.street.message}</span>}
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Número"
                className="max-w-[12.5rem]"
                required
                {...register("number")}
              />
              {errors.number && <span className="text-red-500">{errors.number.message}</span>}
              <div className="relative w-full">
                <Input
                  id="complement"
                  placeholder="Complemento"
                  className="flex-1 w-full"
                  {...register("complement")}
                />
                <label
                  htmlFor="complement"
                  className="absolute right-4 top-1/2 -translate-y-1/2 italic text-xs text-base-label"
                >
                  Opcional
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <Input
                placeholder="Bairro"
                className="max-w-[12.5rem]"
                required
                {...register("neighborhood")}
              />
              {errors.neighborhood && <span className="text-red-500">{errors.neighborhood.message}</span>}
              <Input
                placeholder="Cidade"
                className="flex-1"
                required
                {...register("city")}
              />
              {errors.city && <span className="text-red-500">{errors.city.message}</span>}
              <select
                className="bg-base-input rounded p-3 text-base-label border border-base-button outline-none focus:border-yellow-dark"
                id="UF"
                required
                {...register("uf")}
              >
                <option value="">UF</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RJ">RJ</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
                <option value="DF">DF</option>
              </select>
              {errors.uf && <span className="text-red-500">{errors.uf.message}</span>}
            </div>
          </form>
        </div>
        <div className="bg-base-card rounded-md p-10 mt-4">
          <header className="flex flex-start gap-2">
            <CurrencyDollar size={22} className="text-purple" />
            <div>
              <h4 className="text-base-subtitle">Pagamento</h4>
              <p className="text-base-text text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <div className="flex gap-4 mt-8">
            <Radio
              icon={CreditCard}
              tag="credit"
              content="Cartão de crédito"
              {...register("paymentMethod")}
            />
            <Radio
              icon={Bank}
              tag="debit"
              content="Cartão de débito"
              {...register("paymentMethod")}
            />
            <Radio
              icon={Money}
              tag="money"
              content="Dinheiro"
              {...register("paymentMethod")}
            />
          </div>
          {errors.paymentMethod && <span className="text-red-500">{errors.paymentMethod.message}</span>}
        </div>
      </aside>

      {/* CART */}
      <aside className="min-w-[28rem]">
        <h3 className="text-base-title text-lg font-bold">
          Cafés selecionados
        </h3>
        <div className="bg-base-card rounded-tr-4xl rounded-tl-md rounded-bl-4xl rounded-br-md p-10 mt-4 flex flex-col gap-6">
          {/* CAFÉS */}
          {cart.map((coffee) => (
            <div key={coffee.id} className="flex flex-col gap-6">
              <CoffeeCart
                id={coffee.id}
                image={coffee.image}
                title={coffee.title}
                price={coffee.price}
                amount={coffee.amount}
              />

              <hr className="border-base-button w-full h-1" />
            </div>
          ))}

          {/* PREÇOS */}
          <div>
            <div className="flex justify-between text-base-text">
              <p className="text-sm">Total de itens</p>
              <p className="text-inherit">{formatToReal(totalItemsPrice)}</p>
            </div>
            <div className="flex justify-between text-base-text my-3">
              <p className="text-sm">Entrega</p>
              <p className="text-inherit">R$ 3,50</p>
            </div>
            <div className="flex justify-between text-base-subtitle text-xl font-bold">
              <p>Total</p>
              <p>{formatToReal(totalPrice)}</p>
            </div>
          </div>

          <button
            type="submit"
            form="order"
            className="bg-yellow hover:bg-yellow-dark text-white uppercase font-bold text-lg py-3 rounded-md transition duration-250"
          >
            Confirmar pedido
          </button>
        </div>
      </aside>
    </main>
  );
}
