import React, { useMemo, useState } from "react";
import "./style.css";
import { Navbar, Breadcrumb, Table } from "../../components";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "../../assets/TableColumns";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useAsyncDebounce,
} from "react-table";

const Records = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
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
              <Table columns={columns} data={data} />
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
