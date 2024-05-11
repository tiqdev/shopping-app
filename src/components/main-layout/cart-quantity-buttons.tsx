import { CartProduct } from "@/models/CartProduct";
import {
  decrementProductQuantity,
  incrementProductQuantity,
} from "@/stores/product/actions";
import { Minus, Plus } from "lucide-react";
import { MouseEvent } from "react";

const QuantityButton = ({
  onClick,
  children,
}: {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 center-row bg-soft rounded-[2px] hover:bg-soft-dark transition-colors"
    >
      {children}
    </button>
  );
};

const CartQuantityButtons = ({ product }: { product: CartProduct }) => {
  return (
    <div className="flex flex-row items-center">
      <QuantityButton
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          decrementProductQuantity(product.id);
        }}
      >
        <Minus className="text-tertiary" size={14} />
      </QuantityButton>

      <div className="w-7 h-7 bg-primary center-row">
        <span className="text-lg text-white">{product.quantity}</span>
      </div>

      <QuantityButton
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          incrementProductQuantity(product.id);
        }}
      >
        <Plus className="text-tertiary" size={14} />
      </QuantityButton>
    </div>
  );
};

export default CartQuantityButtons;
