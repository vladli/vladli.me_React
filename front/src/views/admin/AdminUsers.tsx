import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import LoadingEffect from "../../components/LoadingEffect";
import fetchServer from "../../utils/fetchServer";

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
    header: "Register date",
    sortDescFirst: false,
    accessorFn: (row) => row.metadata.creationTime,
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

  if (isLoading || isError) return <LoadingEffect />;
  return (
    <>
      <span className="mb-4 flex justify-center font-bold">
        Google Firebase Authentication
      </span>
      <Table data={data?.users} columns={columns} />
    </>
  );
};

export default AdminUsers;
