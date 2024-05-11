import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { clearCart, setisCartSheetOpen } from "@/stores/product/actions";
import {
  useCartProductsCount,
  useIsCartSheetOpen,
} from "@/stores/product/hooks";
import { X } from "lucide-react";
import CartList from "./cart-list";

const CartSheet = () => {
  const isCartSheetOpen = useIsCartSheetOpen();
  const productCount = useCartProductsCount();
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 sm:w-[60%] bg-secondary mobile:w-[75%] w-full p-4 transition-transform duration-300 z-50 overflow-scroll flex flex-col",
        {
          "translate-x-full": !isCartSheetOpen,
          "sm:hidden block": !isMobile,
        }
      )}
    >
      <div className="flex flex-col items-stretch">
        <div className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-primary">Your Cart</h1>

          <button
            onClick={() => setisCartSheetOpen(false)}
            className="text-primary"
          >
            <X size={24} />
          </button>
        </div>
      </div>
      <CartList />
      {productCount > 0 && (
        <button
          onClick={() => clearCart()}
          className="text-red-600 mt-4 text-sm font-bold self-end underline"
        >
          Empty Cart
        </button>
      )}
    </div>
  );
};

export default CartSheet;
