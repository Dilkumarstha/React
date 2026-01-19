import Card from "./Card";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  // useEffect ///////////////////////////////////////////////////
useEffect(
  ()=>{
    console.log(count);
    console.log("testing"+count)
  },
  [count] //dependencies [state variable]
)


// ///////////////////////////////////////////////////////////////
  return (
    <div className="container">
      <button onClick={() => {
        setCount(count + 1);
      }}>{count}</button>

<h1>Testing {count}</h1>
      <Card title="samsung s24" brand="samsung" price={20000} />
      <Card title="iphone 12 pro max" brand="iphone" price={20900} />
      <Card title="redmi note 9 pro max" brand="xaomi" price={343000} />
      <Card title="samsung s26" brand="samsung" price={2034000} />

    </div>

  )
}

export default App;