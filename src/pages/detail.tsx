import PrimaryButton from "@/components/home/primary-button";
import CartQuantityButtons from "@/components/main-layout/cart-quantity-buttons";
import { formatPrice } from "@/lib/utils";
import { addToCart, fetchProducts } from "@/stores/product/actions";
import { useCart, useProducts } from "@/stores/product/hooks";
import { useMemo, MouseEvent, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const products = useProducts();
  const cart = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedProduct = useMemo(() => {
    return products.find((product) => product.id === id);
  }, [products, id]);

  if (!selectedProduct) {
    return (
      <div className="h-[200px] flex flex-1 flex-col items-start justify-center gap-4">
        <h2 className="text-4xl font-bold text-gray-800">Product Not Found</h2>
        <div className="max-w-[140px]">
          <PrimaryButton
            title="Go Back"
            onClick={() => window.history.back()}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-1 mobile:pt-4 mobile:pr-4">
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-start bg-white shadow-md p-4 gap-4">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="max-w-[500px] w-full object-contain"
          />
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-2xl">{selectedProduct.name}</h1>
            <p className="text-2xl text-primary font-medium">
              {formatPrice(Number(selectedProduct.price))}₺
            </p>

            {/*  Add to Cart Button, we can create button component for this. */}
            {cart.find(
              (cartProduct) => cartProduct.id === selectedProduct.id
            ) ? (
              <div
                className="w-full flex items-start justify-start h-10 mt-4"
                onClick={(event: MouseEvent<HTMLDivElement>) => {
                  event.preventDefault();
                }}
              >
                <CartQuantityButtons
                  product={
                    cart.find(
                      (cartProduct) => cartProduct.id === selectedProduct.id
                    )!
                  }
                />
              </div>
            ) : (
              <button
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  addToCart(selectedProduct.id);
                }}
                className="bg-primary text-white rounded-[4px] px-4 py-2 w-full mt-4"
              >
                Add to Cart
              </button>
            )}
            <p className="text-sm">{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
