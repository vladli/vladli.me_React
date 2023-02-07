import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "../../components/Table/Table";

import { GET_ALL_USERS } from "../../graphql/users";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/Buttons/Button";
import { faker } from "@faker-js/faker";
import useGraphQL from "../../utils/gqlRequest";
import gqlRequest from "../../utils/gqlRequest";
import { useQuery } from "@tanstack/react-query";

import { request, GraphQLClient } from "graphql-request";
import LoadingEffect from "../../components/LoadingEffect";
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
  const { isLoading, isError, data } = useQuery({
    queryKey: ["data"],
    queryFn: () => gqlRequest(GET_ALL_USERS),
  });
  if (isLoading || isError) return null;
  return <Table data={data?.getAllUsers} columns={columns} />;
};

export default AdminUsers;
