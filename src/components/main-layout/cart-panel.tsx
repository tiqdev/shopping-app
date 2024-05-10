import { useCart } from "@/stores/product/hooks";

const CartPanel = () => {
  const cart = useCart();

  return (
    <aside className="w-[220px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] border-l-2 border-black ml-auto tablet:flex hidden sticky top-[52px] flex-col">
      <h2>Cart Panel</h2>
      {cart.map((product) => {
        return (
          <div className="flex flex-col gap-1" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.quantity}</p>
          </div>
        );
      })}
    </aside>
  );
};

export default CartPanel;
