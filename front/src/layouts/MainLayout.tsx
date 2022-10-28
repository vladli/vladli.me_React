import { Icon } from "@iconify/react";
import Button from "../components/Button";

const MainLayout = () => {
  return (
    <div className="bg-gray-800">
      <Button
        variant="outlined"
        size="large"
        onClick={() => console.log("CLICKED")}
      >
        Click
      </Button>
    </div>
  );
};

export default MainLayout;
