import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER } from "../../graphql/users";

function AdminUsersPage() {
  let id = "uHCpkUTWSrNP1rdrdLLm0BlmCLH3";
  const { data, loading, refetch } = useQuery(GET_USER, {
    variables: { uid: id },
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });
  return (
    <div>
      <button onClick={() => refetch()}>Click</button>
    </div>
  );
}

export default AdminUsersPage;
