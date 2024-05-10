import useIsMobile from "@/hooks/useIsMobile";
import CartDrawer from "./cart-drawer";
import { ShoppingCart } from "lucide-react";
import {
  useCartProductsCount,
  useCartTotalPrice,
} from "@/stores/product/hooks";

const CartIconButton = () => {
  const isMobile = useIsMobile();
  const cartProductsCount = useCartProductsCount();
  const cartTotalPrice = useCartTotalPrice();
  return (
    <div className="flex items-center justify-start h-9 rounded-lg border border-transparent transition-colors relative gap-2 min-w-[120px]">
      <div className="absolute top-0 left-4 w-4 h-4 rounded-full center-row bg-white border-2 border-primary">
        <span className="text-black text-[8px] font-bold">
          {cartProductsCount}
        </span>
      </div>
      {isMobile ? <CartDrawer /> : <ShoppingCart />}

      {cartTotalPrice > 0 && (
        <span className="text-white text-base">{cartTotalPrice + ".000"}₺</span>
      )}
    </div>
  );
};

export default CartIconButton;
