import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { pageSize, itemCount, currentPage, onPageItemClick } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  // console.log(currentPage);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-md">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a
              href="#"
              onClick={() => onPageItemClick(page)}
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
