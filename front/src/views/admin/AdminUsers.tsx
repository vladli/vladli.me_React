import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";

import { GET_ALL_USERS } from "../../graphql/users";
import gqlRequest from "../../utils/gqlRequest";
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
];

const AdminUsers = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["admin_users"],
    queryFn: async () => gqlRequest(GET_ALL_USERS),
  });

  if (isLoading) return <LoadingEffect />;
  if (isError) return <h1>err</h1>;
  return <Table data={data?.getAllUsers} columns={columns} />;
};

export default AdminUsers;
