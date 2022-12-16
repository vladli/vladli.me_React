import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation/Navigation";
import { PATH_AUTH } from "../../router/paths";

const DashboardLayout = () => {
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
      <div className="flex bg-gray-700">
        <div className="hidden min-h-[calc(100vh-64px)] bg-gray-800 sm:flex">
          <Navigation />
        </div>
        <div className="min-h-[calc(100vh-64px)]">
          <div className="mx-4 my-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
