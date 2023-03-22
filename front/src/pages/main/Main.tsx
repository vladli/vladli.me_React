import Logo from "../../components/Logo";
import PageTitle from "../../components/PageTitle";
import { PATH_PAGE } from "../../router/paths";

const MainPage = () => {
  return (
    <>
      <PageTitle title={PATH_PAGE.root.title} />
      <div className="flex justify-center pt-2">
        <Logo />
      </div>
    </>
  );
};

export default MainPage;
