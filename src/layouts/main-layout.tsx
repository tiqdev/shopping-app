import { Outlet } from "react-router-dom";
import Navbar from "@/components/main-layout/navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
