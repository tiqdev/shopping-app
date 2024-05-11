import { useCart } from "@/stores/product/hooks";
import SectionTitle from "../home/section-title";
import CartList from "./cart-list";
import { Trash2 } from "lucide-react";
import { clearCart } from "@/stores/product/actions";
import { toast } from "sonner";

const CartPanel = () => {
  const cart = useCart();
  return (
    <aside className="w-[230px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] ml-auto tablet:flex hidden sticky top-[52px] flex-col py-4 overflow-scroll">
      {cart.length > 0 && (
        <div className="flex items-center justify-between">
          <SectionTitle title="Your Cart" />
          <button
            onClick={() => {
              clearCart();
              toast.error("Cart products cleared");
            }}
            className="text-primary mr-1"
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
      <CartList />
    </aside>
  );
};

export default CartPanel;
