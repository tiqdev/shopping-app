import { ShoppingCart } from "lucide-react";
import { Drawer } from "vaul";
import { useCart, useCartTotalPrice } from "@/stores/product/hooks";
import { Minus, Plus } from "lucide-react";

const CartDrawer = () => {
  const cart = useCart();
  const cartTotalPrice = useCartTotalPrice();

  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <ShoppingCart />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[40px] h-fit mt-24 fixed bottom-0 overflow-scroll left-0 right-0 z-50">
          <div className="p-4 bg-white rounded-t-[40px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            {cart.length > 0 && (
              <div className="flex flex-col gap-5 p-3 bg-white">
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
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default CartDrawer;
