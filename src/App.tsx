import { createRoot } from "react-dom/client"; // go to the lib and bring createRoot
import Order from "./Order"; // ← Importing the component
import { StrictMode } from "react";

//note: hooks manage and trigger re-renders when state changes

const App = (): JSX.Element => {
  return (
    <div>
      <h1 className="logo">Padre Gino's - Order Now</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root")!; // non-null assertion

const root = createRoot(container); // create react root object
root.render(
  // elements - instance associated
  <StrictMode>
    <App />
  </StrictMode>,
);
