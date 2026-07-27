import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2 className="count">{count}</h2>

      <div className="buttons">
        <button className="increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button className="decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>

        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;