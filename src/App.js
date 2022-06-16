import { useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(1);

  const changeNumber = () => {
    setSum(sum + number);
    setNumber(sum);
  };

  return (
    <div className="App">
      {console.log(
        `Rendering with values Current Number 👉 ${number} and Sum 👉 ${sum}`
      )}

      <h1 className="header">Automatic Batching in React JS 17</h1>
      
      <button className="add" onClick={changeNumber}>Add Number</button>
      <br></br>

      <div className="output">Current Number {number}</div>
      <div className="output">Total {sum}</div>
      <br></br>
    </div>
  );
}
