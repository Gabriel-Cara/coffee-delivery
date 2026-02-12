import { Outlet } from "react-router";

import { Navbar } from "./components/Navbar";

import { CoffeeContextProvider } from "../contexts/CoffeeContext";

export function DefaultLayout() {
  return (
    <div>
      <CoffeeContextProvider>
        <Navbar />

        <Outlet />
      </CoffeeContextProvider>
    </div>
  );
}
