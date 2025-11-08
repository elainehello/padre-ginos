const Pizza = (props) => {
  // props are the way to pass data and configuration to a React component,
  // allowing comps. to be more flexible and reusable
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, props.name),
      React.createElement("p", {}, props.description),
    ], // if we want to return multiple react components instances we create an array '[]'
  );
};

// Our first jsx / react component
// component - class associated

// HTMLElement obj DOM - var App ()
// App() reusable component
const App = () => {
  return React.createElement(
    "div", // parent element
    {}, // id, class , for.. '{}' means not attributes
    [
      // Array of mulitple children
      React.createElement("h1", {}, "Padre Gino's"),
      React.createElement(Pizza, {
        name: "The Peperroni Pizza",
        description: "Some juicy pizza",
      }),
      React.createElement(Pizza, {
        name: "The Napolitana Pizza",
        description: "Delicious roast tomato greek cheese",
      }),
      React.createElement(Pizza, {
        name: "The Pineapple greatest Pizza",
        description: "Juicy and flavory experience",
      }),
      React.createElement(Pizza, {
        name: "The Magic 4 cheese Pizza",
        description: "Best cheeses from the world",
      }),
      React.createElement(Pizza, {
        name: "The Vegetarian Pizza",
        description: "Finest veggies",
      }),
      React.createElement(Pizza, {
        name: "The Mushroom Pizza",
        description: "Fresh and something else",
      }),
    ],
  );
};

const container = document.getElementById("root"); // type HTMLElement || null
const root = ReactDOM.createRoot(container); // create react root object
root.render(React.createElement(App)); // elements - instance associated
