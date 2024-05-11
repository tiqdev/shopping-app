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
import { formatPrice } from "@/lib/utils";

const CartList = () => {
  const [cartJson, setCartJson] = useLocalStorage("cartJson", "");

  const cart = useCart();
  const cartTotalPrice = useCartTotalPrice();
  const cartProductsCount = useCartProductsCount();

  const updateCartInStorage = () => {
    const _cartInfo = {
      cartList: cart,
      cartTotalPrice: cartTotalPrice,
      cartProductsCount: cartProductsCount,
    };
    setCartJson(JSON.stringify(_cartInfo));
  };

  // Update cart in local storage when cart changes
  useEffect(() => {
    updateCartInStorage();
  }, [cart, cartTotalPrice, cartProductsCount, setCartJson]);

  // Set cart from local storage when component mounts
  useEffect(() => {
    if (cartJson) {
      setCart(JSON.parse(cartJson).cartList);
      setCartTotalPrice(JSON.parse(cartJson).cartTotalPrice);
      setCartProductsCount(JSON.parse(cartJson).cartProductsCount);
    }
  }, [cartJson]);

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
              {formatPrice(cartTotalPrice)}₺
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
