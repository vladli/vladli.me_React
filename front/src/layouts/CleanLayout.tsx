import { AnimatePresence, m } from "framer-motion";
import { useLocation } from "react-router-dom";
import AnimatedOutlet from "../components/AnimatedOutlet";

const CleanLayout = () => {
  const location = useLocation();
  return (
    <div className="">
      <AnimatePresence mode="wait">
        <m.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-screen"
        >
          <AnimatedOutlet />
        </m.div>
      </AnimatePresence>
    </div>
  );
};

export default CleanLayout;
