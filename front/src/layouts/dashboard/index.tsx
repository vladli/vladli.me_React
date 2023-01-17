import { useLocation } from "react-router-dom";

import { AnimatePresence, m } from "framer-motion";
import Navigation from "../../components/Navigation/Navigation";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedOutlet from "../../components/AnimatedOutlet";

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <>
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
                <AnimatedOutlet key={location.key} />
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
