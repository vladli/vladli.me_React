import { Outlet } from "react-router-dom";
const CleanLayout = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Outlet />
    </div>
  );
};

export default CleanLayout;
