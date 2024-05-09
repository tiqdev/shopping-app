import { Product } from "@/models/Product";
import ProductItem from "./product-item";

const ProductList = ({ filteredProducts }: { filteredProducts: Product[] }) => {
  return (
    <div className="products-list">
      {filteredProducts.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
