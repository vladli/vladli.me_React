import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../graphql/users";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/Buttons/Button";
import { faker } from "@faker-js/faker";

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
    accessorKey: "ip",
    header: "ip",
  },
  {
    accessorKey: "userName",
    header: "Username",
  },
];

const AdminUsers = () => {
  //const { data, loading, refetch }: any = useQuery(GET_ALL_USERS);
  //if (loading) return <div>Load</div>;

  const list = () => {
    let list = [];
    for (let i = 0; i < 400; i++) {
      const randomName = faker.name.fullName(); // Rowan Nikolaus
      const ip = faker.internet.ip();
      const randomEmail = faker.internet.email();
      list.push({ uid: i, email: randomEmail, ip: ip, userName: randomName });
    }
    return list;
  };
  const [data, setData] = React.useState(() => list());
  return (
    <>
      <Table data={data} columns={columns} />
      {/* <Button onClick={() => refetch()}>RELOAD</Button> */}
    </>
  );
};

export default AdminUsers;
