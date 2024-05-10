import { Product } from "@/models/Product";
import { addToCart } from "@/stores/product/actions";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { useCart } from "@/stores/product/hooks";
import CartQuantityButtons from "../main-layout/cart-quantity-buttons";

const ProductItem = ({ product }: { product: Product }) => {
  const cart = useCart();

  return (
    <Link to={"/detail/" + product.id} className="center-col" key={product.id}>
      <div className="flex flex-col gap-3 items-stretch p-[10px] bg-white h-fit mobile:w-[180px] w-[150px] border border-card rounded-[4px] hover:shadow-md transition-shadow">
        {/*
         <img
          src={product.image}
          alt={product.name}
          className="w-[160px] h-[150px] object-cover"
        />
        */}

        <div className="w-[160px] h-[150px] object-cover bg-red-100"></div>

        <span className="text-primary font-medium text-sm">
          {product.price} ₺
        </span>
        <span className="leading-5 text-base font-medium text-balance h-10">
          {product.name}
        </span>

        {/*  Add to Cart Button, we can create button component for this. */}

        {cart.find((cartProduct) => cartProduct.id === product.id) ? (
          <div
            className="w-full flex items-center justify-center h-10"
            onClick={(event: MouseEvent<HTMLDivElement>) => {
              event.preventDefault();
            }}
          >
            <CartQuantityButtons
              product={
                cart.find((cartProduct) => cartProduct.id === product.id)!
              }
            />
          </div>
        ) : (
          <button
            onClick={(event: MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
              addToCart(product.id);
            }}
            className="bg-primary text-white rounded-[4px] px-4 py-2 w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
