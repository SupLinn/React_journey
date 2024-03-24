import { useState } from "react";
import './Counter.css'

export default function Couter() {
    let [integer, setInteger] = useState(10);

  const increment = () => {
    if(integer == 15){
      return;
    }
    setInteger(integer + 1);
  }

  const decrement = () => {
    if(integer == 0){
      return;
    }
    setInteger(integer - 1);
  }

  return (
    <div>
      <button onClick={increment}>Increase value</button><br/>
      <h1>Count Value : {integer}</h1>
      <button onClick={decrement}>Decrease vlaue</button>
    </div>
  )
}