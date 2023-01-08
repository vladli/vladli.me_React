import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/users";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/Buttons/Button";

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
  //const { data, loading, refetch }: any = useQuery(GET_ALL_USERS);
  //if (loading) return <div>Load</div>;

  const list = () => {
    let list = [];
    for (let i = 0; i < 20; i++) {
      list.push({ uid: i, email: "asddsa" });
    }
    return list;
  };
  const [data, setData] = React.useState(() => list());
  return (
    <>
      <Table data={data} columns={columns} />
      {/* <Button onClick={() => refetch()}>RELOAD</Button> */}
      <Pagination />
    </>
  );
};

export default AdminUsers;
