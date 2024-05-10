import FiltersPanel from "@/components/home/filters-panel";
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
      <FiltersPanel />

      {/*  Products  */}
      <ProductsContainer />
    </div>
  );
};

export default Home;
