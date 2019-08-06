import React from "react";
const Sorting = ({ onSort, sortItems }) => {
  return (
    <div className="row">
      <div className="col-auto">
        <p>Sort By</p>
      </div>
      <div className="col">
        <ul className="pagination">
          {sortItems.map(item => (
            <li key={item.id} className="page-item">
              <a
                onClick={() => onSort(item)}
                className="page-link"
                tabIndex="-1"
              >
                {item.path}
              </a>
              {console.log(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sorting;
