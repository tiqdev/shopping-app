import { render } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { Product } from "@/models/Product";
import ProductList from "@/components/home/products-list";
import { Provider } from "react-redux";
import store from "@/stores";
import { BrowserRouter } from "react-router-dom";
import { formatPrice } from "@/lib/utils";

describe("ProductList", () => {
  it("renders a list of products", () => {
    const products: Product[] = [
      {
        id: "1",
        name: "Product 1",
        price: "100",
        image: "https://via.placeholder.com/150",
        createdAt: new Date().toString(),
        description: "Description 1",
        model: "Model 1",
        brand: "Brand 1",
      },
      {
        id: "2",
        name: "Product 2",
        price: "200",
        image: "https://via.placeholder.com/150",
        createdAt: new Date().toString(),
        description: "Description 2",
        model: "Model 2",
        brand: "Brand 2",
      },
      {
        id: "3",
        name: "Product 3",
        price: "300",
        image: "https://via.placeholder.com/150",
        createdAt: new Date().toString(),
        description: "Description 3",
        model: "Model 3",
        brand: "Brand 3",
      },
    ];

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductList filteredProducts={products} />
        </BrowserRouter>
      </Provider>
    );

    const productListElement = getByTestId("product-list");
    expect(productListElement).toBeInTheDocument();

    const productItems = productListElement.querySelectorAll(".product-item");
    expect(productItems.length).toBe(products.length);

    products.forEach((product, index) => {
      const productItemElement = productItems[index];
      expect(productItemElement).toHaveTextContent(product.name);
      expect(productItemElement).toHaveTextContent(
        formatPrice(Number(product.price))
      );
    });
  });

  it("renders an empty list when no products are provided", () => {
    const products: Product[] = [];

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductList filteredProducts={products} />
        </BrowserRouter>
      </Provider>
    );

    const productListElement = getByTestId("product-list");
    expect(productListElement).toBeInTheDocument();

    const productItems = productListElement.querySelectorAll(".product-item");
    expect(productItems.length).toBe(0);
  });
});
