import { Outlet } from "react-router-dom";
import HeaderBar from "./Components/HeaderBar";
import BottomNavBar from "./Components/BottomNavBar";

const ParentComponent = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default ParentComponent;
