import useIsMobile from "@/hooks/useIsMobile";
import CartDrawer from "./cart-drawer";
import { ShoppingCart } from "lucide-react";
import { useCartProductsCount } from "@/stores/product/hooks";

const CartIconButton = () => {
  const isMobile = useIsMobile();
  const cartProductsCount = useCartProductsCount();
  return (
    <div className="flex center-row w-9 h-9 rounded-lg cursor-pointer border border-transparent hover:border-white transition-colors relative">
      {isMobile ? <CartDrawer /> : <ShoppingCart />}
      <div className="absolute top-0 right-0 w-4 h-4 rounded-full center-row bg-white border-2 border-primary">
        <span className="text-black text-[8px] font-bold">
          {cartProductsCount}
        </span>
      </div>
    </div>
  );
};

export default CartIconButton;
