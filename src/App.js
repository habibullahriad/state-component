import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(23);
  ///1.
  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);
  //2.
  // const IncreaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={IncreaseCount}>Increase Count</button>
      <button onClick={DecreaseCount}>Decrease Count</button>
    </div>
  );
}

export default App;
