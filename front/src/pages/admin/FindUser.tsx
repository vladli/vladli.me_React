import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";
import Main from "../../views/admin/FindUser";

export default function FindUser() {
  const { t } = useTranslation("admin");
  return (
    <>
      <PageTitle title={t("FindUser.title")} />
      <Main />
    </>
  );
}
