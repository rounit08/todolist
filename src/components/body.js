import React, { useState } from "react";
import "./body.css";
import Todolist from "./todolist";

function Body() {
  const [inputList, setInputList] = useState("");
  const [shop, setShop] = useState([]);

  const items = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setShop((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <div className="body">
      <span>
        <input
          type="text"
          className="body_input"
          placeholder="Add task..."
          onChange={items}
        />
        <button onClick={listOfItems} className="body_inputImage">
          +
        </button>
      </span>

      <ol className="bodyList">
        {shop.map((itemval) => {
          return <Todolist text={itemval} />;
        })}
      </ol>
    </div>
  );
}

export default Body;
