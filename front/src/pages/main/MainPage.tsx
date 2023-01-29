import React from "react";
import Logo from "../../components/Logo";
import NavigationTop from "../../components/NavigationTop/NavTop";
import TopMenu from "../../config/TopMenu";

const MainPage = () => {
  return (
    <div className="flex justify-center pt-2">
      <Logo />
      <NavigationTop />
    </div>
  );
};

export default MainPage;
