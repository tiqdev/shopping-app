import useIsMobile from "@/hooks/useIsMobile";
import CartDrawer from "./cart-drawer";
import { ShoppingCart } from "lucide-react";

const CartIconButton = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <CartDrawer />
      ) : (
        <div className="flex center-row w-9 h-9 rounded-lg cursor-pointer border border-transparent hover:border-white transition-colors">
          <ShoppingCart />
        </div>
      )}
    </>
  );
};

export default CartIconButton;
