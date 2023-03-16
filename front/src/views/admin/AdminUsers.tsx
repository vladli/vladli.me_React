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
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import LoadingEffect from "../../components/LoadingEffect";
import { useState, Fragment } from "react";
import Pagination from "components/Pagination";
import Button from "components/Button";
import Modal from "components/Modal/Modal";

//icons
import { MdEdit, MdDeleteForever } from "react-icons/md";

export const columns: ColumnDef<any, any>[] = [
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
      return <DeleteButton user={props.row.original} />;
    },
  },
];

const DeleteButton = ({ user }: any) => {
  const { uid, email, creationTime } = user;
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(!modalVisible);
  const actionDelete = () => {
    axios
      .delete(`/api/users/user`, {
        params: { uid: uid },
      })
      .then(() => {
        setModalVisible(false);
        toast.success("Complete!");
      });
  };
  return (
    <>
      <Button shape="square" size="sm" color="ghost">
        <MdEdit size={20} />
      </Button>
      <Button shape="square" size="sm" color="ghost" onClick={showModal}>
        <MdDeleteForever color="red" size={20} />
      </Button>
      <Modal open={modalVisible} onClickBackDrop={showModal}>
        <label
          onClick={showModal}
          className="btn-sm btn-circle btn absolute right-2 top-2"
        >
          ✕
        </label>
        <Modal.Header className="font-bold">Delete User</Modal.Header>
        <Modal.Body>
          <p>Do you want to permanently delete user?</p>
          <br />
          <p>UID: {uid}</p>
          <p>Email: {email}</p>
        </Modal.Body>
        <Modal.Actions>
          <Button color="error" size="sm" onClick={actionDelete}>
            Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

const AdminUsers = () => {
  const { isLoading, isError, data } = useQuery({
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
    <>
      <span className="mb-4 flex justify-center rounded-full bg-primary font-bold">
        Google Firebase Authentication
      </span>
      <Table>
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
    </>
  );
};

export default AdminUsers;
