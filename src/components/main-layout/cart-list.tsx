import {
  setCart,
  setCartProductsCount,
  setCartTotalPrice,
} from "@/stores/product/actions";
import {
  useCart,
  useCartProductsCount,
  useCartTotalPrice,
} from "@/stores/product/hooks";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import CartItem from "./cart-item";

const CartList = () => {
  const [cartJson, setCartJson] = useLocalStorage("cartJson", "");

  const cart = useCart();
  const cartTotalPrice = useCartTotalPrice();
  const cartProductsCount = useCartProductsCount();

  useEffect(() => {
    const _cartInfo = {
      cartList: cart,
      cartTotalPrice: cartTotalPrice,
      cartProductsCount: cartProductsCount,
    };

    if (cart.length === 0) {
      if (cartJson) {
        const _cart = JSON.parse(cartJson);
        setCart(_cart.cartList);
        setCartTotalPrice(_cart.cartTotalPrice);
        setCartProductsCount(_cart.cartProductsCount);
      }
    } else {
      setCartJson(JSON.stringify(_cartInfo));
    }
  }, [cart, cartJson, setCartJson, cartTotalPrice, cartProductsCount]);

  return (
    cart.length > 0 && (
      <div className="flex flex-col gap-5 p-[10px] border border-card bg-white">
        {cart.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row items-center justify-start gap-1">
            <span className="text-sm text-black">Total Price:</span>
            <span className="font-bold text-base text-primary">
              {cartTotalPrice.toFixed(2)}₺
            </span>
          </div>
          <button className="bg-primary text-white rounded-[4px] px-4 py-2 w-full">
            Checkout
          </button>
        </div>
      </div>
    )
  );
};

export default CartList;
