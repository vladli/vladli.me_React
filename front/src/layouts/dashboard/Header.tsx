import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/AuthContext";
import { PATH_AUTH, PATH_DASHBOARD } from "../../router/paths";
import DarkModeSwitch from "../../components/DarkModeSwitch";
import { useTranslation } from "react-i18next";

//icons
import { MdMenu } from "react-icons/md";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import Navbar from "components/Navigation/Navbar";

type Props = {
  mobileNavStatus: boolean;
  setMobileNav: any;
};

export default function Header({ mobileNavStatus, setMobileNav }: Props) {
  const { t } = useTranslation("auth");
  const { isAuthenticated, signOut }: any = useAuth();
  const toggleMobileNav = () => setMobileNav(!mobileNavStatus);
  const navigate = useNavigate();
  const navigateTo = (link: string) => () => {
    navigate(link);
  };
  return (
    <Navbar className="bg-base-100 transition-all duration-300 ease-in-out">
      <Navbar.Start>
        <div className="flex-none cursor-pointer lg:hidden">
          <MdMenu size={32} onClick={toggleMobileNav} />
        </div>
        <div className="flex lg:hidden">
          <div className="flex-none">
            <Link to={PATH_DASHBOARD.root.url}>
              <Logo />
            </Link>
          </div>
          <DarkModeSwitch />
        </div>
      </Navbar.Start>
      <Navbar.End>
        {!isAuthenticated ? (
          <Button
            color="info"
            leftIcon={<CgLogIn size={20} />}
            onClick={navigateTo(PATH_AUTH.login.url)}
          >
            {t("Login.login")}
          </Button>
        ) : (
          <Button
            color="error"
            leftIcon={<CgLogOut size={20} />}
            onClick={() => signOut()}
          >
            {t("Login.logout")}
          </Button>
        )}
      </Navbar.End>
    </Navbar>
  );
}
