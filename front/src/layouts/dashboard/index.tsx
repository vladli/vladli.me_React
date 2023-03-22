import { useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "./Header";
import AnimatedOutlet from "../../components/AnimatedOutlet";
import Drawer from "components/Layout/Drawer";

const DashboardLayout = () => {
  const location = useLocation();
  const [mobileNavStatus, setMobileNav] = useState(false);

  const closeOverlay = () => {
    setMobileNav(false);
  };

  return (
    <Drawer
      open={mobileNavStatus}
      side={<Sidebar {...{ setMobileNav }} />}
      mobile
      onClickOverlay={closeOverlay}
      contentClassName="bg-base-300"
    >
      <Header {...{ mobileNavStatus, setMobileNav }} />
      <AnimatePresence mode="wait">
        <m.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-[calc(100vh-4rem)]"
        >
          <AnimatedOutlet />
        </m.div>
      </AnimatePresence>
    </Drawer>
  );
};

export default DashboardLayout;
