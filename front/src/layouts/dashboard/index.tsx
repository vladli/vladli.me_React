import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation/Navigation";
import { PATH_AUTH } from "../../router/paths";

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-16 w-full flex-wrap items-center border border-gray-900 bg-gray-800">
        <div className="ml-4 sm:ml-14">
          <Logo />
        </div>
        <div className="absolute right-4">
          <Button
            leftIcon="entypo:login"
            onClick={() => navigate(PATH_AUTH.login)}
          >
            Log In
          </Button>
        </div>
      </div>
      <div className="flex">
        <div className="hidden h-[calc(100vh-64px)]  bg-gray-800 pt-1 sm:flex ">
          <Navigation />
        </div>
        <div className="flex h-[calc(100vh-64px)] shrink-0 grow justify-center bg-gray-700 sm:justify-start">
          <div className="mx-4 my-4 flex ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
