import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import Main from "views/admin/AllUsers";

export default function AllUsers() {
  const { t } = useTranslation("admin");
  return (
    <>
      <PageTitle title={t("AllUsers.title")} />
      <Main />
    </>
  );
}
