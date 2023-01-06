import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/users";

export const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: "uid",
    header: "UID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

const AdminUsers = () => {
  const { data, loading }: any = useQuery(GET_ALL_USERS);
  if (loading) return <div>Load</div>;
  return <Table data={data.getAllUsers} columns={columns} />;
};

export default AdminUsers;
