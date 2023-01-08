import React from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  PaginationState,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import Pagination from "../Pagination/Pagination";

interface ITable {
  data: any[];
  columns: ColumnDef<any>[];
}

const Table: React.FC<ITable> = ({ data, columns }) => {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );
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
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    onPaginationChange: setPagination,
    debugTable: false,
    initialState: {
      pagination,
    },
  });
  console.log(pageIndex, pageSize, getCanPreviousPage());

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
    </>
  );
};

export default Table;
