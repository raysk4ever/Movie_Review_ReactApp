import React from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    selectedGenre,
    valueProperty,
    onGenreItemSelected
  } = props;

  return (
    <ul className="list-group m-2">
      {items.map(item => (
        <li
          onClick={() => onGenreItemSelected(item)}
          key={item[valueProperty]}
          className={
            selectedGenre === item
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
