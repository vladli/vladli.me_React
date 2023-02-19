import Logo from "../../components/Logo";
import NavigationTop from "../../components/NavigationTop/NavTop";
import PageTitle from "../../components/PageTitle";
import { PATH_PAGE } from "../../router/paths";

const MainPage = () => {
  return (
    <>
      <PageTitle title={PATH_PAGE.root.title} />
      <div className="flex justify-center pt-2">
        <Logo />
        <NavigationTop />
      </div>
    </>
  );
};

export default MainPage;
