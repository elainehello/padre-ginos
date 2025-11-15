import { useState } from "react";
import Pizza from "./Pizza";

/**
 * @typedef {Object} PizzaOrder
 * @property {string} pizzaType - Type of pizza
 * @property {string} pizzaSize - Size of pizza  
 * @property {number} price - Price of pizza
 */

/**
 * @typedef {Object} OrderProps
 * @property {function} [onOrderSubmit] - Callback when order is submitted
 */


interface PizzaOrder { // TS interface
  pizzaType: string;
  pizzaSize: string;
  price: number;
}

interface OrderProps {
  onOrderSubmit?: (order: PizzaOrder) => void;
}

/**
 * Order component
 * @param {OrderProps} props - Component props
 */
// export default allows you to import this component without curly braces
export default function Order({ onOrderSubmit }: OrderProps) {
  const [pizzaType, setPizzaType] = useState<string>("pepperoni"); // ← Initial state
  const [pizzaSize, setPizzaSize] = useState<string>("M");
  
  // This will log every time state changes
  console.log("Current selection:", pizzaType, pizzaSize);

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => {
                console.log("Pizza type changed to:", e.target.value);
                setPizzaType(e.target.value);
              }} // ← Event handler
              name="pizza-type"
              value={pizzaType} // ← Display current state
            >
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="napolitana">The Napolitana Pizza</option>
              <option value="hawaiian">The Pineapple greatest Pizza</option>
              <option value="four_cheese">The Magic 4 cheese Pizza</option>
              <option value="ital_veggie">The Vegetarian Pizza</option>
              <option value="veggie_veg">The Mushroom Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => {
                    console.log("Pizza size changed to:", e.target.value);
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => {
                    console.log("Pizza size changed to:", e.target.value);
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-L"
                  value="L"
                  id="pizza-l"
                  onChange={(e) => {
                    console.log("Pizza size changed to:", e.target.value);
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="Pepperoni"
              description="temporal"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$13.37</p>
          </div>
        </div>
      </form>
    </div>
  );
}
