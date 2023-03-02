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
      <div className="drawer-mobile drawer ">
        <input
          type="checkbox"
          checked={mobileNavStatus}
          className="drawer-toggle"
          readOnly
        />
        <div className="drawer-content h-full bg-base-300 p-4 ">
          <AnimatePresence mode="wait">
            <m.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <AnimatedOutlet />
            </m.div>
          </AnimatePresence>
        </div>
        <div className="drawer-side">
          <label
            className="drawer-overlay"
            onClick={() => setMobileNav(false)}
          ></label>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
