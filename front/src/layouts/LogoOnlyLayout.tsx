import { Outlet } from "react-router-dom";
const LogoOnlyLayout = () => {
  return (
    <div className="min-h-screen bg-bgDark">
      <Outlet />
    </div>
  );
};

export default LogoOnlyLayout;
