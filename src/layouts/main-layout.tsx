import { Outlet } from "react-router-dom";
import Navbar from "@/components/main-layout/navbar";
import CartPanel from "@/components/main-layout/cart-panel";

const MainLayout = () => {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <div className="flex flex-row w-full max-w-pagemax mx-auto">
        <Outlet />
        <CartPanel />
      </div>
    </div>
  );
};
export default MainLayout;
