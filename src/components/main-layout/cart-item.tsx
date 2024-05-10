import { CartProduct } from "@/models/CartProduct";
import CartQuantityButtons from "./cart-quantity-buttons";

const CartItem = ({ product }: { product: CartProduct }) => {
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

      <CartQuantityButtons product={product} />
    </div>
  );
};

export default CartItem;
