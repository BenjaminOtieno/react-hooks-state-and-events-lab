import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react"

function App() {
  const [appMode, setAppMode] = useState(true)

  const handleClick = ()=>{
    setAppMode(!appMode)
  }

  return (
    <div onClick={handleClick} className={appMode ? "App light":"App dark"}>
      <header>
        <h2>Shopster</h2>
        <button>{appMode ? 'Light Mode':'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
