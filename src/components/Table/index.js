import React from "react";

import "./style.css";
import icons from "../../assets/icons";

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
                      <span>{icons.tableDownIcon}</span>
                    ) : (
                      <span>{icons.tableUpIcon}</span>
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

export default Table;
