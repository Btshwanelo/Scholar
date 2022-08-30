import React from "react";

import PropTypes from "prop-types";

import "./style.css";
import { NextIcon, PreviousIcon } from "../../assets/icons";

const TableControl = ({
  nextPage,
  canNextPage,
  search,
  pageIndex,
  pageOptions,
  previousPage,
  canPreviousPage,
  value,
}) => {
  return (
    <div className="table-controls">
      <div className="search">
        <input
          className="table-input"
          placeholder="Search"
          value={value || ""}
          //TODO: how do i execute a function as a prop ? also the input field doesnt update as i type
          onChange={(e) => search(e)}
        />
      </div>
      <h4>Page: {` ${pageIndex + 1} of ${pageOptions.length} `}</h4>
      <button
        className="navigation-btn"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        <PreviousIcon />
      </button>
      <button
        className="navigation-btn"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        <NextIcon />
      </button>
    </div>
  );
};

TableControl.propTypes = {
  nextPage: PropTypes.func,
  canNextPage: PropTypes.bool,
  search: PropTypes.func,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.array,
  previousPage: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  value: PropTypes.string,
};

export default TableControl;
