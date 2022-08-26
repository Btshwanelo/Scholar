import React, { useMemo, useState } from "react";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useAsyncDebounce,
} from "react-table";

import "./style.css";
import { Table } from "../../components";
import { DashboardLayout } from "../../Layouts";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "../../assets/TableColumns";
import TableControl from "../../components/TableControls";

const Modules = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

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
    <DashboardLayout>
      <div className="table-container">
        <div className="table-card">
          <div className="table-card__body">
            <TableControl
              search={search}
              nextPage={nextPage}
              canNextPage={canNextPage}
              pageIndex={pageIndex}
              pageOptions={pageOptions}
              previousPage={previousPage}
              canPreviousPage={canPreviousPage}
              value={value}
            />
            <Table
              columns={columns}
              data={data}
              page={page}
              headerGroups={headerGroups}
              prepareRow={prepareRow}
              getTableProps={getTableProps}
              getTableBodyProps={getTableBodyProps}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Modules;
