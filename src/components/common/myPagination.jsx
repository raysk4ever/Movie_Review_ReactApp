import React from "react";
import _ from "lodash";

const MyPagination = ({ pageSize, itemSize, currentPage, onPageClick }) => {
  const pageCount = Math.ceil(itemSize / pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pages.length === 1) return null;

  return (
    <div>
      <ul className="pagination pagination-md">
        {pages.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a onClick={() => onPageClick(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPagination;
