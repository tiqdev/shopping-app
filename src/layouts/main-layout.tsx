import { Outlet } from "react-router-dom";
import Navbar from "@/components/main-layout/navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row w-full max-w-pagemax mx-auto">
        <Outlet />
        <aside className="w-[220px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] border-l-2 border-black ml-auto tablet:flex hidden sticky top-[52px]">
          <h1>Cart</h1>
        </aside>
      </div>
    </div>
  );
};
export default MainLayout;
