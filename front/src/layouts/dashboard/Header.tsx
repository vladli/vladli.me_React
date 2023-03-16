import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/AuthContext";
import { PATH_AUTH, PATH_DASHBOARD } from "../../router/paths";
import DarkModeSwitch from "../../components/DarkModeSwitch";
import Swap from "../../components/Swap";

//icons
import { MdClose, MdMenu } from "react-icons/md";
import { CgLogIn, CgLogOut } from "react-icons/cg";

type Props = {
  mobileNavStatus: boolean;
  setMobileNav: any;
};

export default function Header({ mobileNavStatus, setMobileNav }: Props) {
  const { isAuthenticated, signOut }: any = useAuth();

  const navigate = useNavigate();
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 transition-all duration-300 ease-in-out">
      <div className="navbar-start">
        <div className="flex-none cursor-pointer lg:hidden">
          <Swap
            onElement={<MdClose size={32} />}
            offElement={<MdMenu size={32} />}
            rotate
            active={mobileNavStatus}
            action={() => setMobileNav(!mobileNavStatus)}
          />
        </div>
        <div className="flex-none">
          <Link to={PATH_DASHBOARD.root.url}>
            <Logo />
          </Link>
        </div>
        <DarkModeSwitch />
      </div>
      <div className="navbar-end">
        {!isAuthenticated ? (
          <Button
            leftIcon={<CgLogIn size={20} />}
            onClick={() => navigate(PATH_AUTH.login.url)}
          >
            Log In
          </Button>
        ) : (
          <Button leftIcon={<CgLogOut size={20} />} onClick={() => signOut()}>
            Log Out
          </Button>
        )}
      </div>
    </div>
  );
}
