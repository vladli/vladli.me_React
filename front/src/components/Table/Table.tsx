import React from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import Pagination from "../Pagination/Pagination";
import TablePagination from "./TablePagination";

interface ITable {
  data: any[];
  columns: ColumnDef<any>[];
  pageSize?: number;
}

const Table: React.FC<ITable> = ({ data, columns, pageSize = 12 }) => {
  const {
    getState,
    getPageCount,
    getCanPreviousPage,
    previousPage,
    nextPage,
    getCanNextPage,
    setPageSize,
    getHeaderGroups,
    getRowModel,
  } = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data.length / pageSize),
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

      <TablePagination
        {...{
          getState,
          getPageCount,
          previousPage,
          getCanPreviousPage,
          nextPage,
          getCanNextPage,
          setPageSize,
        }}
      />
    </>
  );
};

export default Table;
