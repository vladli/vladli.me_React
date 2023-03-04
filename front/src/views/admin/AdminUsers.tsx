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

import { useQuery } from "@tanstack/react-query";
import LoadingEffect from "../../components/LoadingEffect";
import React from "react";
import Pagination from "components/Pagination";

export const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: "id",
    header: "",
    enableSorting: false,
  },
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
  const pageSize = 10;
  const {
    getState,
    getPageCount,
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
  const handlePageClick = ({ selected: selectedPage }: any) => {
    setPageIndex(selectedPage);
  };
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
          {getRowModel()?.rows.map((row, i) => (
            <Table.Row key={row.id} hover>
              {row.getVisibleCells().map((cell) => (
                <React.Fragment key={cell.id}>
                  <span>{i + 1}</span>
                  <span>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </span>
                </React.Fragment>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Pagination
        state={getState()}
        pageCount={getPageCount()}
        onPageChange={handlePageClick}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default AdminUsers;
