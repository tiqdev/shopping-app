import { CartProduct } from "@/models/CartProduct";
import CartQuantityButtons from "./cart-quantity-buttons";
import { formatPrice } from "@/lib/utils";

const CartItem = ({ product }: { product: CartProduct }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col" key={product.id}>
        <span className="text-[13px] text-black text-balance leading-4">
          {product.name}
        </span>
        <span className="font-medium text-[12px] text-primary">
          {formatPrice(Number(product.price))}₺
        </span>
      </div>

      <CartQuantityButtons product={product} />
    </div>
  );
};

export default CartItem;
