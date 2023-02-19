import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import LoadingEffect from "../../components/LoadingEffect";

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

  if (isLoading || isError) return <LoadingEffect />;
  return (
    <>
      <span className="mb-4 flex justify-center font-bold">
        Google Firebase Authentication
      </span>
      {data && <Table data={data} columns={columns} />}
    </>
  );
};

export default AdminUsers;
