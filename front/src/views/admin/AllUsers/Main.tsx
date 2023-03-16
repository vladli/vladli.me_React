import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import Table from "../../../components/Table/Table";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingEffect from "../../../components/LoadingEffect";
import { useState, Fragment } from "react";
import Pagination from "components/Pagination";
import UserActions from "./UserActions";

const Main = () => {
  const columns: ColumnDef<any, any>[] = [
    {
      accessorKey: "id",
      header: "",
      enableSorting: false,
      cell: (props) => {
        return <>{props.row.id}</>;
      },
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
    {
      accessorKey: "actions",
      header: "Actions",
      enableSorting: false,
      cell: (props) => {
        return <UserActions user={props.row.original} {...{ refetch }} />;
      },
    },
  ];
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["admin_users"],
    queryFn: async () => {
      const { data } = await axios.get("/api/users/getAllUsers");
      return data;
    },
  });
  const [sorting, setSorting] = useState<SortingState>([]);
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
    <div className="p-2">
      <span className="mb-4 flex justify-center rounded-full bg-primary font-bold">
        Google Firebase Authentication
      </span>
      <Table className="w-full">
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
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Fragment key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Fragment>
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
    </div>
  );
};

export default Main;
