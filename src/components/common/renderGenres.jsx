import React, { Component } from "react";
const RenderGenres = ({ items, onItemClick, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          style={{ cursor: "pointer" }}
          onClick={() => onItemClick(item)}
          key={item._id}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default RenderGenres;
