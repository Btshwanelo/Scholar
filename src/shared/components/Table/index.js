import React, { useState } from "react";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useAsyncDebounce,
} from "react-table";
import PropTypes from "prop-types";

import "./style.css";
import { UpIcon, DownIcon, NextIcon, PreviousIcon } from "../../assets/icons";

const Table = ({ data, columns }) => {
  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    page,
    prepareRow,
    getTableBodyProps,
    headerGroups,
    getTableProps,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 400);

  const search = (e) => {
    setValue(e?.target?.value);
    onChange(e?.target?.value);
  };

  return (
    <>
      <div className="table-controls">
        <div className="search">
          <input
            className="table-input"
            placeholder="Search"
            value={value || ""}
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
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted &&
                      (column.isSortedDesc ? <DownIcon /> : <UpIcon />)}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
};

export default Table;
