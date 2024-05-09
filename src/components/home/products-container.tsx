import Pagination from "@/components/home/pagination";
import { filterProducts } from "@/lib/utils";
import {
  useFilterOptions,
  useProductsLoading,
  useProducts,
} from "@/stores/product/hooks";
import { useMemo } from "react";
import ProductList from "./products-list";
import SkeletonProduct from "./skeleton-product";

const ProductsContainer = () => {
  const products = useProducts();
  const productsLoading = useProductsLoading();
  const filterOptions = useFilterOptions();

  const data = useMemo(
    () => filterProducts(products, filterOptions),
    [products, filterOptions]
  );

  const filteredProducts = data.filteredList;
  const pageCount = data.pageCount;

  return (
    <div className="flex flex-col mx-auto pt-4">
      {/*  Loading  */}
      {productsLoading && (
        <div className="products-list">
          {[...Array(8)].map((_, index) => (
            <SkeletonProduct key={index} />
          ))}
        </div>
      )}

      {/*  Products Not Found  */}
      {!productsLoading && filteredProducts.length === 0 && (
        <div className="flex-1 flex items-center justify-center max-w-[810px] mx-auto h-fit">
          <span className="text-lg text-gray-500">
            No results were found for your search
          </span>
        </div>
      )}

      {/*  Products List  */}
      {filteredProducts.length > 0 && (
        <div className="flex-1 max-w-[810px] mx-auto h-fit pb-10">
          {/*  Products List  */}
          <ProductList filteredProducts={filteredProducts} />

          {/*  Pagination  */}
          {pageCount > 1 && <Pagination pageCount={pageCount} />}
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
