import { useCart, useCartTotalPrice } from "@/stores/product/hooks";
import { Minus, Plus } from "lucide-react";

const CartPanel = () => {
  const cart = useCart();
  const cartTotalPrice = useCartTotalPrice();

  return (
    <aside className="w-[230px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] ml-auto tablet:flex hidden sticky top-[52px] flex-col py-4 overflow-scroll">
      {cart.length > 0 && (
        <div className="flex flex-col gap-5 p-[10px] border border-card bg-white">
          {cart.map((product) => {
            return (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col" key={product.id}>
                  <span className="text-[12px] text-black text-balance leading-4">
                    {product.name}
                  </span>
                  <span className="font-medium text-[10px] text-primary">
                    {product.price}₺
                  </span>
                </div>

                <div className="flex flex-row items-center">
                  <button className="w-6 h-6 center-row bg-soft rounded-[2px]">
                    <Minus className="text-tertiary" size={14} />
                  </button>
                  <div className="w-7 h-7 bg-primary center-row">
                    <span className="text-lg text-white">
                      {product.quantity}
                    </span>
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
                {cartTotalPrice + ".000₺"}
              </span>
            </div>
            <button className="bg-primary text-white rounded-[4px] px-4 py-2 w-full">
              Checkout
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default CartPanel;
