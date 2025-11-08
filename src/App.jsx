import { createRoot } from "react-dom/client"; // go to the lib and bring createRoot
import Pizza from "./Pizza";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="The Pepperoni Pizza" description="Some juicy pizza"/>
      <Pizza name="The Napolitana Pizza" description="Delicious roast tomato greek cheese"/>
      <Pizza name="The Pineapple greatest Pizza" description="Juicy and flavory experience"/>
      <Pizza name="The Magic 4 cheese Pizza" description="Best cheeses from the world"/>
      <Pizza name="The Vegetarian Pizza" description="Finest veggies"/>
      <Pizza name="The Mushroom Pizza" description="Fresh and something else"/>
    </div>
  );
};

const container = document.getElementById("root"); // type HTMLElement || null
const root = createRoot(container); // create react root object
root.render(<App/>); // elements - instance associated
