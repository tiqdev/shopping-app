import { addToCart } from "@/stores/product/actions";
import { useProducts } from "@/stores/product/hooks";
import { useMemo, MouseEvent } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const products = useProducts();
  const selectedProduct = useMemo(() => {
    return products.find((product) => product.id === id);
  }, [products, id]);

  if (!selectedProduct) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  } else {
    return (
      <div className="w-full pt-8 pr-4">
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-start bg-white shadow-md p-4 gap-4">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="max-w-[500px] w-full object-contain"
          />
          <div className="flex flex-col gap-[15px]">
            <h1>{selectedProduct.name}</h1>
            <p>{selectedProduct.price}</p>
            <button
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                addToCart(selectedProduct.id);
              }}
              className="bg-primary text-white rounded-[4px] px-4 py-2 w-full"
            >
              Add to Cart
            </button>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
