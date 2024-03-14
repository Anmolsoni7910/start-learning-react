import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: 'hitesh',
    age: 21
  };

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">Tailwind test</h1>

      <Card username="chaiaurcode" btnTxt="Click Me" />
      <Card username="hitesh" someObj={myObj} />
    </>
  );
}

export default App;
