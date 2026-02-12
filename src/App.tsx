import { BrowserRouter } from "react-router";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { Router } from "./routes/Router";

import "./styles/index.css";

export function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>
  );
}
