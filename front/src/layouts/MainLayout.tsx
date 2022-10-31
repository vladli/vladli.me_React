import { Icon } from "@iconify/react";
import tw from "twin.macro";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation/Navigation";
import HomeHeader from "../views/Home/HomeHeader";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="hidden h-screen bg-gray-800 sm:flex ">
        <Navigation />
      </div>
      <div className="flex h-16 w-full flex-wrap items-center bg-gray-800">
        <div className="ml-4">
          <Logo />
        </div>
        <div className="absolute right-4">
          <Button onClick={() => alert("CLICK")}>Log In</Button>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;