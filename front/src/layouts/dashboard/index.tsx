import { Outlet, useLocation, useNavigate, useOutlet } from "react-router-dom";

import { AnimatePresence, m } from "framer-motion";
import Button from "../../components/Buttons/Button";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation/Navigation";
import { useAuth } from "../../context/AuthContext";
import { PATH_AUTH } from "../../router/paths";
import DarkModeSwitch from "../../components/DarkModeSwitch";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import AnimatedOutlet from "../../components/AnimatedOutlet";

const DashboardLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <div className="flex bg-bgLight dark:bg-bgDark">
        <div className="hidden min-h-[calc(100vh-64px)] bg-menuBgLight dark:bg-menuBgDark sm:flex">
          <Navigation />
        </div>
        <div className="min-h-[calc(100vh-64px)] grow">
          <div className="mx-4 my-4">
            <AnimatePresence mode="wait">
              <m.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AnimatedOutlet />
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </m.div>
  );
};

export default DashboardLayout;
