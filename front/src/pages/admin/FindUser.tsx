import PageTitle from "../../components/PageTitle";
import { PATH_ADMIN } from "../../router/paths";
import Main from "../../views/admin/FindUser";

export default function FindUser() {
  return (
    <>
      <PageTitle title={PATH_ADMIN.findUser.title} />
      <Main />
    </>
  );
}
