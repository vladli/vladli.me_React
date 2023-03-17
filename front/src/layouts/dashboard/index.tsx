import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "./Header";
import AnimatedOutlet from "../../components/AnimatedOutlet";

const DashboardLayout = () => {
  const location = useLocation();
  const [mobileNavStatus, setMobileNav] = useState(false);

  return (
    <>
      <div className="drawer-mobile drawer">
        <input
          type="checkbox"
          checked={mobileNavStatus}
          className="drawer-toggle"
          readOnly
        />
        <div className="drawer-content bg-base-300">
          <Header {...{ mobileNavStatus, setMobileNav }} />
          <AnimatePresence mode="wait">
            <m.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4"
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
          <Sidebar {...{ setMobileNav }} />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
