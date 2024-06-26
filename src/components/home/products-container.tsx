import Pagination from "@/components/home/pagination";
import { filterProducts } from "@/lib/utils";
import {
  useFilterOptions,
  useProductsLoading,
  useProducts,
  useIsFilterSheetOpen,
} from "@/stores/product/hooks";
import { useMemo } from "react";
import ProductList from "./products-list";
import SkeletonProduct from "./skeleton-product";
import { Filter } from "lucide-react";
import { setIsFilterSheetOpen } from "@/stores/product/actions";
import SectionTitle from "./section-title";

const ProductsContainer = () => {
  const products = useProducts();
  const productsLoading = useProductsLoading();
  const filterOptions = useFilterOptions();
  const isFilterSheetOpen = useIsFilterSheetOpen();

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
        <div className="flex items-center justify-center max-w-[810px] mx-auto h-[400px]">
          <span className="text-lg text-gray-500" data-testid="no-results">
            No results were found for your search
          </span>
        </div>
      )}

      {/*  Products List  */}
      {!productsLoading && filteredProducts.length > 0 && (
        <>
          <div className="flex justify-between items-center">
            <SectionTitle title="Products" />
            <button
              className="w-8 h-8 flex items-center justify-center tablet:hidden"
              onClick={() => setIsFilterSheetOpen(!isFilterSheetOpen)}
            >
              <Filter size={24} className="text-primary" />
            </button>
          </div>

          <div className="flex-1 max-w-[810px] mx-auto h-fit pb-10">
            {/*  Products List  */}
            <ProductList filteredProducts={filteredProducts} />

            {/*  Pagination  */}
            {pageCount > 1 && <Pagination pageCount={pageCount} />}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsContainer;
