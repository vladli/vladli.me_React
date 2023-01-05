import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";
export const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
];
const dummyData = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({
      id: i,
      name: `Item ${i}`,
      gender: 100,
      email: i,
    });
  }
  return items;
};
const AdminUsers = () => {
  return <Table data={dummyData()} columns={columns} />;
};

export default AdminUsers;
