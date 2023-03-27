import PageTitle from "../../components/PageTitle";
import Main from "views/admin/AddUser";
import { useTranslation } from "react-i18next";

export default function AddUser() {
  const { t } = useTranslation("admin");
  return (
    <>
      <PageTitle title={t("AddUser.title")} />
      <Main />
    </>
  );
}
