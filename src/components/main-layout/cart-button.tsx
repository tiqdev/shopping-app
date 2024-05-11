import { ShoppingCart } from "lucide-react";
import {
  useCartProductsCount,
  useCartTotalPrice,
} from "@/stores/product/hooks";
import { formatPrice } from "@/lib/utils";
import useIsMobile from "@/hooks/useIsMobile";
import {
  setisCartSheetOpen,
  setIsFilterSheetOpen,
} from "@/stores/product/actions";

const CartIconButton = () => {
  const cartProductsCount = useCartProductsCount();
  const cartTotalPrice = useCartTotalPrice();
  const isMobile = useIsMobile();
  return (
    <button
      className="flex items-center justify-end h-9 rounded-lg transition-colors relative gap-2 min-w-[140px]"
      onClick={() => {
        if (isMobile) {
          setisCartSheetOpen(true);
          setIsFilterSheetOpen(false);
        }
      }}
    >
      {cartTotalPrice > 0 && (
        <span className="text-white text-base">
          {formatPrice(cartTotalPrice)}₺
        </span>
      )}

      {cartProductsCount > 0 && (
        <div className="absolute top-0 -right-2 w-4 h-4 rounded-full center-row bg-white border-2 border-primary">
          <span className="text-black text-[8px] font-bold">
            {cartProductsCount}
          </span>
        </div>
      )}
      <ShoppingCart />
    </button>
  );
};

export default CartIconButton;
