import PageTitle from "../../components/PageTitle";
import { PATH_ADMIN } from "../../router/paths";
import Main from "views/admin/AllUsers";

export default function AllUsers() {
  return (
    <>
      <PageTitle title={PATH_ADMIN.users.title} />
      <Main />
    </>
  );
}
