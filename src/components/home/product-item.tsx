import { Product } from "@/models/Product";
import { addToCart } from "@/stores/product/actions";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { useCart } from "@/stores/product/hooks";
import CartQuantityButtons from "../main-layout/cart-quantity-buttons";
import { formatPrice } from "@/lib/utils";
import PrimaryButton from "./primary-button";

const ProductItem = ({ product }: { product: Product }) => {
  const cart = useCart();

  return (
    <Link to={"/detail/" + product.id} className="product-item">
      <img
        src={product.image}
        alt={product.name}
        className="w-[160px] h-[150px] object-cover"
      />

      <span className="text-primary font-medium text-sm">
        {formatPrice(Number(product.price))}₺
      </span>
      <span className="leading-5 text-base font-medium text-balance h-10">
        {product.name}
      </span>

      {cart.find((cartProduct) => cartProduct.id === product.id) ? (
        <div
          className="w-full flex items-center justify-center h-10"
          onClick={(event: MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
          }}
        >
          <CartQuantityButtons
            product={cart.find((cartProduct) => cartProduct.id === product.id)!}
          />
        </div>
      ) : (
        <PrimaryButton
          title="Add to Cart"
          testId="add-to-cart"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            addToCart(product.id);
          }}
        />
      )}
    </Link>
  );
};

export default ProductItem;
