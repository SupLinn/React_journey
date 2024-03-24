import { useState } from "react";

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
    <>
      <h1>Count Value : {integer}</h1>
      <button onClick={increment}>Increase value</button><br/>
      <button onClick={decrement}>Decrease vlaue</button>
    </>
  )
}