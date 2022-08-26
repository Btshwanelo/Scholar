import React from "react";

import PropTypes from "prop-types";

import "./style.css";
import { UpIcon, DownIcon } from "../../assets/icons";

const Table = ({
  page,
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
}) => {
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <DownIcon />
                    ) : (
                      <UpIcon />
                    )
                  ) : (
                    ""
                  )}
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
                return <td {...cell.getCellProps()}> {cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  page: PropTypes.array,
  getTableProps: PropTypes.func,
  getTableBodyProps: PropTypes.func,
  headerGroups: PropTypes.array,
  prepareRow: PropTypes.func,
};

export default Table;
