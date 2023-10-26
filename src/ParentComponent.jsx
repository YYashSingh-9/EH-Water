import { Outlet } from "react-router-dom";
import HeaderBar from "./Components/HeaderBar";
import BottomNavBar from "./Components/BottomNavBar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./Store/AsyncFuntions";
const ParentComponent = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HeaderBar />
        <Outlet />
        <BottomNavBar />
      </QueryClientProvider>
    </>
  );
};

export default ParentComponent;
