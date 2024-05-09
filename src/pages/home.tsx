import FiltersContainer from "@/components/home/filters-container";
import ProductsContainer from "@/components/home/products-container";
import { fetchProducts } from "@/stores/product/actions";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex-1 flex flex-row relative z-10">
      {/*  Filter Tab  */}
      <FiltersContainer />

      {/*  Products  */}
      <ProductsContainer />
    </div>
  );
};

export default Home;
