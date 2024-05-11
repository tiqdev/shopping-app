import { useCart } from "@/stores/product/hooks";
import SectionTitle from "../home/section-title";
import CartList from "./cart-list";

const CartPanel = () => {
  const cart = useCart();
  return (
    <aside className="w-[230px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] ml-auto tablet:flex hidden sticky top-[52px] flex-col py-4 overflow-scroll">
      {cart.length > 0 && <SectionTitle title="Your Cart" />}
      <CartList />
    </aside>
  );
};

export default CartPanel;
