import { Product } from "@/models/Product";
import { addToCart } from "@/stores/product/actions";
import { Link } from "react-router-dom";
import { MouseEvent } from "react";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Link to={"/detail/" + product.id} className="center-col" key={product.id}>
      <div className="flex flex-col gap-3 items-stretch p-[10px] bg-white h-fit w-[180px] border border-card rounded-[4px] hover:shadow-md transition-shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-[160px] h-[150px] object-cover"
        />

        <span className="text-primary font-medium text-sm">
          {product.price} ₺
        </span>
        <span className="leading-5 font-medium text-balance h-10">
          {product.name}
        </span>

        {/*  Add to Cart Button, we can create button component for this. */}
        <button
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            addToCart(product.id);
          }}
          className="bg-primary text-white rounded-[4px] px-4 py-2 w-full"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductItem;
