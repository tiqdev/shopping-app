import { Outlet } from "react-router-dom";
import Navbar from "@/components/main-layout/navbar";
import CartPanel from "@/components/main-layout/cart-panel";
import CartSheet from "@/components/main-layout/cart-sheet";
import FilterSheet from "@/components/home/filters-sheet";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <CartSheet />
      <FilterSheet />
      <Toaster expand={false} richColors position="bottom-right" />
      <main className="w-full flex flex-col items-start justify-center gap-2 sm:px-4 px-3">
        <div className="flex w-full max-w-pagemax mx-auto">
          <Outlet />
          <CartPanel />
        </div>
      </main>
    </div>
  );
};
export default MainLayout;
