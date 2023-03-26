import PageTitle from "../../components/PageTitle";
import { PATH_ADMIN } from "../../router/paths";
import Main from "views/admin/AddUser";

export default function AddUser() {
  return (
    <>
      <PageTitle title={PATH_ADMIN.addUser.title} />
      <Main />
    </>
  );
}
