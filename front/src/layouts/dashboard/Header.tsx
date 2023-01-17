import { useNavigate } from "react-router-dom";

import Button from "../../components/Buttons/Button";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/AuthContext";
import { PATH_AUTH } from "../../router/paths";
import DarkModeSwitch from "../../components/DarkModeSwitch";

const Header = () => {
  const { user, isAuthenticated, signOut }: any = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex h-20 w-full flex-wrap items-center  bg-menuBgLight  dark:bg-menuBgDark">
      <div className="mt-2 ml-4 sm:ml-14">
        <Logo />
      </div>
      <DarkModeSwitch />
      <div className="absolute right-4">
        {!isAuthenticated ? (
          <Button
            leftIcon="entypo:login"
            onClick={() => navigate(PATH_AUTH.login)}
          >
            Log In
          </Button>
        ) : (
          <div className="inline-flex">
            <div className="mr-3 place-self-center text-white">
              User: {user.email}
            </div>
            <Button leftIcon="entypo:login" onClick={() => signOut()}>
              Log Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
