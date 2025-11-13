import { createRoot } from "react-dom/client"; // go to the lib and bring createRoot
import Pizza from "./Pizza";
import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="The Pepperoni Pizza"
        description="Some juicy pizza"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="The Napolitana Pizza"
        description="Delicious roast tomato greek cheese"
        image="/public/pizzas/napolitana.webp"
      />
      <Pizza
        name="The Pineapple greatest Pizza"
        description="Juicy and flavory experience"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="The Magic 4 cheese Pizza"
        description="Best cheeses from the world"
        image="/public/pizzas/four_cheese.webp"
      />
      <Pizza
        name="The Vegetarian Pizza"
        description="Finest veggies"
        image="/public/pizzas/ital_veggie.webp"
      />
      <Pizza
        name="The Mushroom Pizza"
        description="Fresh and something else"
        image="/public/pizzas/veggie_veg.webp"
      />
    </div>
  );
};

const container = document.getElementById("root"); // type HTMLElement || null
const root = createRoot(container); // create react root object
root.render(
  // elements - instance associated
  <StrictMode>
    <App />
  </StrictMode>,
);
