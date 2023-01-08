import React from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import Pagination from "../Pagination/Pagination";

interface ITable {
  data: any[];
  columns: ColumnDef<any>[];
}

const Table: React.FC<ITable> = ({ data, columns }) => {
  const {
    getState,
    getPageCount,
    getCanPreviousPage,
    previousPage,
    nextPage,
    setPageIndex,
    setPageSize,
    getHeaderGroups,
    getRowModel,
  } = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <table className="select-none text-center text-white">
        <thead className=" bg-gray-800">
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-600 py-4 text-sm font-medium"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-gray-900">
              {row.getVisibleCells().map((cell) => (
                <td
                  className="whitespace-nowrap border border-gray-600 px-4 py-4 text-sm"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
        {"<"}
      </button>
      <button onClick={() => nextPage()}>{">"}</button>
      <select
        value={getState().pagination.pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </>
  );
};

export default Table;
