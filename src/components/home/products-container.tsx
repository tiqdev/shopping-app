import Pagination from "@/components/home/pagination";
import { filterProducts } from "@/lib/utils";
import { Product } from "@/models/Product";
import { useFilterOptions, useProducts } from "@/stores/product/hooks";
import { useMemo } from "react";

const ProductsContainer = () => {
  const products = useProducts();
  const filterOptions = useFilterOptions();

  const data = useMemo(
    () => filterProducts(products, filterOptions),
    [products, filterOptions]
  );

  const filteredProducts = data.filteredList;
  const pageCount = data.pageCount;

  return (
    <>
      {/*  Products  */}
      {filteredProducts.length === 0 && (
        <div className="flex-1 flex items-center justify-center max-w-[810px] mx-auto h-fit">
          <span className="text-lg text-gray-500">
            No results were found for your search
          </span>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="flex-1 max-w-[810px] mx-auto h-fit pb-10">
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols3 tablet:grid-cols-2 sm:grid-cols-3 mobile:grid-cols-2 grid-cols-1 gap-[28px]">
            {filteredProducts.map((product: Product) => (
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
            ))}
          </div>

          {/*  Pagination  */}
          {pageCount > 1 && <Pagination pageCount={pageCount} />}
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
