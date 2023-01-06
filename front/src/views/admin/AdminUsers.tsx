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
  {
    accessorKey: "displayName",
    header: "Name",
  },
];

const AdminUsers = () => {
  const { data, error, loading }: any = useQuery(GET_ALL_USERS, {
    onCompleted(users) {
      console.log(users);
    },
    onError(error) {
      console.log(error);
    },
  });
  if (loading) return <div>Load</div>;
  return <Table data={data.getAllUsers} columns={columns} />;
};

export default AdminUsers;
