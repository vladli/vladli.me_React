import React from "react";
import PageTitle from "../../components/PageTitle";
import { PATH_ADMIN } from "../../router/paths";
import AdminFindUser from "../../views/admin/AdminFindUser";

export default function AdminFindUserPage() {
  return (
    <>
      <PageTitle title={PATH_ADMIN.findUser.title} />
      <AdminFindUser />
    </>
  );
}
