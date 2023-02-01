import { useLocation } from "react-router-dom";

import { AnimatePresence, m } from "framer-motion";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedOutlet from "../../components/AnimatedOutlet";

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="flex bg-light-secondaryBg dark:bg-dark-secondaryBg">
        <div className="hidden bg-light-mainBg pt-4 dark:bg-dark-mainBg sm:flex">
          <Sidebar />
        </div>
        <div className="min-h-[calc(100vh-5rem-5rem)] grow dark:text-white">
          <AnimatePresence mode="wait">
            <m.div
              className="mx-4 my-4"
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
    </>
  );
};

export default DashboardLayout;
