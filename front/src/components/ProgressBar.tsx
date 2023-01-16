import React from "react";
import NProgress from "nprogress";

const ProgressBar = () => {
  NProgress.configure({ showSpinner: false });
  React.useMemo(() => {
    NProgress.start();
  }, []);
  React.useEffect(() => {
    return () => {
      NProgress.done();
    };
  }, []);
  return null;
};

export default ProgressBar;
