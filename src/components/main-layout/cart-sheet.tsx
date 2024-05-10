import useIsMobile from "@/hooks/useIsMobile";
import { cn, formatPrice } from "@/lib/utils";
import { setisCartSheetOpen } from "@/stores/product/actions";
import {
  useCart,
  useCartTotalPrice,
  useIsCartSheetOpen,
} from "@/stores/product/hooks";
import { Minus, Plus, X } from "lucide-react";

const CartSheet = () => {
  const cart = useCart();
  const cartTotalPrice = useCartTotalPrice();
  const isCartSheetOpen = useIsCartSheetOpen();
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 sm:w-[60%]  bg-secondary mobile:w-[75%] w-full p-4 transition-transform duration-300 z-50",
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
      <div className="flex flex-col gap-5 p-3 bg-white border border-card">
        {cart.map((product) => {
          return (
            <div
              className="flex flex-row items-center justify-between"
              key={product.id}
            >
              <div className="flex flex-col">
                <span className="text-[16px] text-black text-balance leading-4">
                  {product.name}
                </span>
                <span className="font-medium text-[14px] text-primary">
                  {product.price}₺
                </span>
              </div>

              <div className="flex flex-row items-center">
                <button className="w-6 h-6 center-row bg-soft rounded-[2px]">
                  <Minus className="text-tertiary" size={14} />
                </button>
                <div className="w-7 h-7 bg-primary center-row">
                  <span className="text-lg text-white">{product.quantity}</span>
                </div>
                <button className="w-6 h-6 center-row bg-soft transition-colors rounded-[2px]">
                  <Plus className="text-tertiary" size={14} />
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row items-center justify-start gap-1">
            <span className="text-sm text-black">Total Price:</span>
            <span className="font-bold text-base text-primary">
              {formatPrice(cartTotalPrice)}₺
            </span>
          </div>
          <button className="bg-primary text-white rounded-[4px] px-4 py-2 w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSheet;
