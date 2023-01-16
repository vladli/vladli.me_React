import { Outlet, useNavigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import Button from "../../components/Buttons/Button";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation/Navigation";
import { useAuth } from "../../context/AuthContext";
import { PATH_AUTH } from "../../router/paths";
import DarkModeSwitch from "../../components/DarkModeSwitch";
import Header from "./Header";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="flex bg-bgLight dark:bg-bgDark">
        <div className="hidden min-h-[calc(100vh-64px)] bg-menuBgLight dark:bg-menuBgDark sm:flex">
          <Navigation />
        </div>
        <div className="min-h-[calc(100vh-64px)] grow">
          <div className="mx-4 my-4">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
