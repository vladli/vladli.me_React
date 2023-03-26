import Calculator from "views/beginner-projects/Calculator";
import PageTitle from "../../components/PageTitle";
import { PATH_BEGINNER_PROJECTS } from "../../router/paths";

const DashboardPage = () => {
  return (
    <>
      <PageTitle title={PATH_BEGINNER_PROJECTS.calculator.title} />
      <div className="flex justify-center lg:justify-start">
        <Calculator />
      </div>
    </>
  );
};

export default DashboardPage;
