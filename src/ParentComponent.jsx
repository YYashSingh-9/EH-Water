import HeaderBar from "./Components/HeaderBar";
import { Outlet } from "react-router-dom";
const ParentComponent = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default ParentComponent;
