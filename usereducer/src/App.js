import "./App.css";
import { useReducer, useState } from "react";
const ACTION = {
  INCREAMENT: "increament",
  DECRAMENT: "decreament",
};

const reducer = (state, action) => {
  if (action.type === ACTION.INCREAMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === ACTION.DECRAMENT) {
    return {
      count: state.count - 1,
    };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 5 });
  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount((prev) => prev + 1);
  // };
  // const decrease = () => {
  //   setCount((prev) => prev - 1);
  // };

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: ACTION.INCREAMENT })}>+</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: ACTION.DECRAMENT })}>-</button>
    </div>
  );
}

export default App;
