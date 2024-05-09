import { Product } from "@/models/Product";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="center-col" key={product.id}>
      <div className="flex flex-col gap-[15px] items-stretch p-[10px] bg-white h-fit w-[180px]">
        <img
          src={product.image}
          alt=""
          className="w-[160px] h-[150px] object-cover"
        />

        <span className="text-primary font-medium text-sm">
          {product.price} ₺
        </span>
        <span className="leading-5 font-medium text-balance h-10">
          {product.name}
        </span>

        <button className="bg-primary text-white rounded-[4px] px-4 py-2 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
