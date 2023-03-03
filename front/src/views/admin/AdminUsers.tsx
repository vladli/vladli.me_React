import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import Table from "../../components/Table/Table";
import axios from "axios";

import ReactPaginate from "react-paginate";
import { useQuery } from "@tanstack/react-query";
import LoadingEffect from "../../components/LoadingEffect";
import React from "react";
import TablePagination from "components/Table/TablePagination";
import Pagination from "components/Pagination";

export const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: "uid",
    header: "UID",
    enableSorting: false,
  },
  {
    accessorKey: "email",
    header: "Email",
    sortDescFirst: false,
  },
  {
    accessorKey: "creationTime",
    header: "Register date",
    sortDescFirst: false,
  },
];

const AdminUsers = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["admin_users"],
    queryFn: async () => {
      const { data } = await axios("/api/users/getAllUsers");
      return data;
    },
  });
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const pageSize = 1;
  const {
    getState,
    getPageCount,
    getCanPreviousPage,
    previousPage,
    nextPage,
    getCanNextPage,
    setPageSize,
    getFlatHeaders,
    getRowModel,
    setPageIndex,
  } = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    pageCount: Math.ceil(data?.length / pageSize),

    // Pipeline
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  if (isLoading || isError) return <LoadingEffect />;
  return (
    <>
      <span className="mb-4 flex justify-center rounded-full bg-primary font-bold">
        Google Firebase Authentication
      </span>
      <Table zebra>
        <Table.Head>
          {getFlatHeaders().map((header) => (
            <span
              key={header.id}
              className={header.column.getCanSort() ? "cursor-pointer" : ""}
              onClick={header.column.getToggleSortingHandler()}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              {{
                asc: " 🔼",
                desc: " 🔽",
              }[header.column.getIsSorted() as string] ?? null}
            </span>
          ))}
        </Table.Head>
        <Table.Body>
          {getRowModel()?.rows.map((row) => (
            <Table.Row key={row.id} hover>
              {row.getVisibleCells().map((cell) => (
                <span key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </span>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <ReactPaginate
        pageCount={getPageCount()}
        className="btn-group"
        pageClassName="btn btn-sm"
        activeClassName="btn-active"
        previousClassName="btn btn-sm"
        nextClassName="btn btn-sm"
      />
    </>
  );
};

export default AdminUsers;
