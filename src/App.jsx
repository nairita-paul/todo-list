import "./App.css";
import React from "react";
export default function App() {
  const [inputItem, setInputItem] = React.useState({
    value: "",
    isChecked: false,
  });
  const [arrItems, setArrItems] = React.useState([]);

  function handleChange(event) {
    setInputItem({
      value: event.target.value,
    });
  }

  function add() {
    if (!inputItem.value) return;
    setArrItems((prevItems) => {
      return [...prevItems, inputItem];
    });
    setInputItem({ value: "", isChecked: false });
  }

  function handleCheck(checkEvent, checkIndex) {
    setArrItems((prevItems) => {
      const newArr = prevItems.map((item, index) => {
        if (index == checkIndex) {
          item.isChecked = checkEvent.target.checked;
        }
        return item;
      });
      return newArr;
    });
  }

  function deleteData(index) {
    setArrItems((prevItems) => {
      const finalArr = prevItems.filter((_, i) => i != index);
      return finalArr;
    });
  }

  const listItems = arrItems.map((item, index) => {
    return (
      <li
        key={index}
        className={item.isChecked ? "isChecked" : ""}
        style={{ listStyle: "none" }}
      >
        <input
          type={"checkbox"}
          onChange={(event) => handleCheck(event, index)}
        />
        {item.value}
        <button onClick={() => deleteData(index)}>X</button>
      </li>
    );
  });

  return (
    <main>
      <h1>To do list</h1>
      <input
        type="text"
        placeholder="Enter your list"
        value={inputItem.value}
        onChange={handleChange}
      />
      <button onClick={add}>Add</button>
      <ul>{listItems}</ul>
    </main>
  );
}
