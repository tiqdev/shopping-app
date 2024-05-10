import CartList from "./cart-list";

const CartPanel = () => {
  return (
    <aside className="w-[230px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] ml-auto tablet:flex hidden sticky top-[52px] flex-col py-4 overflow-scroll">
      <CartList />
    </aside>
  );
};

export default CartPanel;
