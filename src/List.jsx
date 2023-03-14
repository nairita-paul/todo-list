import React from "react";
export default function List(props) {
  const listItems = props.data.map((item, index) => {
    return (
      <li
        key={index}
        className={item.isChecked ? "isChecked" : ""}
        style={{ listStyle: "none" }}
      >
        <input
          type={"checkbox"}
          onChange={(event) => props.handleCheck(event, index)}
        />
        {item.value}
        <button onClick={() => props.deleteData(index)}>X</button>
      </li>
    );
  });

  return <ul>{listItems}</ul>;
}
