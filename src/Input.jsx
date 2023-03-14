import React from "react";
export default function Input(props) {
  const [inputItem, setInputItem] = React.useState({
    value: "",
    isChecked: false,
  });
  function handleChange(event) {
    setInputItem({
      value: event.target.value,
      isChecked: false,
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your list"
        value={inputItem.value}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          props.handleClick(inputItem);
          setInputItem({ value: "", isChecked: false });
        }}
      >
        Add
      </button>
    </div>
  );
}
