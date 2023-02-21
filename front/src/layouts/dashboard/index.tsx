import { useLocation } from "react-router-dom";

import { AnimatePresence, m } from "framer-motion";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedOutlet from "../../components/AnimatedOutlet";
import React from "react";

const DashboardLayout = () => {
  const location = useLocation();
  const [mobileNavStatus, setMobileNav] = React.useState(false);
  return (
    <div className="min-w-fit">
      <Header {...{ mobileNavStatus, setMobileNav }} />
      <div className="flex bg-light-secondaryBg dark:bg-dark-secondaryBg">
        <div className="fixed hidden h-screen bg-light-mainBg dark:bg-dark-mainBg sm:block">
          <Sidebar />
        </div>
        {mobileNavStatus && (
          <div className="h-modal fixed z-50 h-full overflow-y-auto overflow-x-hidden bg-light-mainBg dark:bg-dark-mainBg sm:hidden">
            <Sidebar />
          </div>
        )}
        <div className="min-h-[calc(100vh-5rem-5rem)] grow dark:text-white sm:ml-56">
          <AnimatePresence mode="wait">
            <m.div
              className="h-full p-4"
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
      <Footer />
    </div>
  );
};

export default DashboardLayout;
