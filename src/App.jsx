import "./App.css";
import React from "react";
import Input from "./Input";
import List from "./List";
export default function App() {
  const [arrItems, setArrItems] = React.useState([]);

  function add(inputItem) {
    if (!inputItem.value) return;
    setArrItems((prevItems) => {
      return [...prevItems, inputItem];
    });
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

  return (
    <main>
      <h1>To do list</h1>
      <Input handleClick={add} />

      <List data={arrItems} handleCheck={handleCheck} deleteData={deleteData} />
    </main>
  );
}
