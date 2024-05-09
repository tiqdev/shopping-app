import { ShoppingCart } from "lucide-react";

const CartIconButton = () => {
  return (
    <div className="flex center-row w-9 h-9 rounded-lg cursor-pointer border border-transparent hover:border-white transition-colors">
      <ShoppingCart />
    </div>
  );
};

export default CartIconButton;
