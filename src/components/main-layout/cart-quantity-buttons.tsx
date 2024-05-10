import { CartProduct } from "@/models/CartProduct";
import {
  decrementProductQuantity,
  incrementProductQuantity,
} from "@/stores/product/actions";
import { Minus, Plus } from "lucide-react";
import { MouseEvent } from "react";

const CartQuantityButtons = ({ product }: { product: CartProduct }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="w-6 h-6 center-row bg-soft rounded-[2px]"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          decrementProductQuantity(product.id);
        }}
      >
        <Minus className="text-tertiary" size={14} />
      </button>
      <div className="w-7 h-7 bg-primary center-row">
        <span className="text-lg text-white">{product.quantity}</span>
      </div>
      <button
        className="w-6 h-6 center-row bg-soft transition-colors rounded-[2px]"
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          incrementProductQuantity(product.id);
        }}
      >
        <Plus className="text-tertiary" size={14} />
      </button>
    </div>
  );
};

export default CartQuantityButtons;
