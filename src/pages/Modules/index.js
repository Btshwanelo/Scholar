import React, { useMemo, useState } from "react";
import "./style.css";
import { Navbar, Breadcrumb } from "../../components";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useAsyncDebounce,
} from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "../../assets/TableColumns";

const Records = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    state,
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

  return (
    <div className="records">
      <Navbar />
      <div className="main-content">
        <Breadcrumb />
        <div className="table-container">
          <div className="table-card">
            <div className="table-card__body">
              <h2>Students</h2>
              <div className="search">
                Search{"  "}
                <input
                  className="table-input"
                  value={value || ""}
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                />
              </div>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? "D"
                                : "^"
                              : ""}
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
                            <td {...cell.getCellProps()}>
                              {" "}
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="footer-row">
                <span>
                  Page:{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <button
                  className="navigation-btn"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"<"}
                </button>
                <button
                  className="navigation-btn"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
