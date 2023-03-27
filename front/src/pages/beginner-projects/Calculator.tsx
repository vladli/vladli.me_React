import Calculator from "views/beginner-projects/Calculator";
import PageTitle from "../../components/PageTitle";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation("beginnerProjects");
  return (
    <>
      <PageTitle title={t("Calculator.title")} />
      <div className="flex justify-center lg:justify-start">
        <Calculator />
      </div>
    </>
  );
};

export default DashboardPage;
