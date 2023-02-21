import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Buttons/Button";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/AuthContext";
import { PATH_AUTH, PATH_DASHBOARD } from "../../router/paths";
import DarkModeSwitch from "../../components/DarkModeSwitch";
import { Icon } from "@iconify/react";

type Props = {
  mobileNavStatus: boolean;
  setMobileNav: any;
};

export default function Header({ mobileNavStatus, setMobileNav }: Props) {
  const { isAuthenticated, signOut }: any = useAuth();

  const navigate = useNavigate();
  return (
    <div className="sticky top-0 flex h-20 w-full flex-wrap items-center bg-light-mainBg dark:bg-dark-mainBg">
      <Icon
        icon="material-symbols:menu-rounded"
        color="white"
        width={30}
        className="ml-2 cursor-pointer sm:hidden"
        onClick={() => setMobileNav(!mobileNavStatus)}
      />
      <div className="sm:ml-14">
        <Link to={PATH_DASHBOARD.root.url}>
          <Logo />
        </Link>
      </div>
      <DarkModeSwitch />
      <div className="absolute right-4">
        {!isAuthenticated ? (
          <Button
            leftIcon="entypo:login"
            onClick={() => navigate(PATH_AUTH.login.url)}
          >
            Log In
          </Button>
        ) : (
          <Button leftIcon="entypo:login" onClick={() => signOut()}>
            Log Out
          </Button>
        )}
      </div>
    </div>
  );
}
