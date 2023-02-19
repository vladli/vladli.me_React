import PageTitle from "../../components/PageTitle";
import { PATH_ADMIN } from "../../router/paths";
import AdminUsers from "../../views/admin/AdminUsers";

function AdminUsersPage() {
  return (
    <>
      <PageTitle title={PATH_ADMIN.users.title} />
      <div className="flex h-full flex-col flex-wrap">
        <AdminUsers />
      </div>
    </>
  );
}

export default AdminUsersPage;
