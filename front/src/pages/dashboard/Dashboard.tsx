import PageTitle from "../../components/PageTitle";
import { PATH_DASHBOARD } from "../../router/paths";
import Dashboard from "../../views/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <PageTitle title={PATH_DASHBOARD.root.title} />
      <Dashboard />
    </>
  );
};

export default DashboardPage;
