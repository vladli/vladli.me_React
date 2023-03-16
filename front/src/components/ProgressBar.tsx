import NProgress from "nprogress";
import { useEffect, useMemo } from "react";

const ProgressBar = () => {
  NProgress.configure({ showSpinner: false });
  useMemo(() => {
    NProgress.start();
  }, []);
  useEffect(() => {
    return () => {
      NProgress.done();
    };
  }, []);
  return null;
};

export default ProgressBar;
