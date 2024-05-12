import { render, screen } from "@testing-library/react";

import { beforeEach, describe, expect, it, vitest } from "vitest";
import "@testing-library/jest-dom";
import ProductItem from "@/components/home/product-item";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { formatPrice } from "@/lib/utils";
import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice, _addToCart } from "@/stores/product";
import { Product } from "@/models/Product";

const store = configureStore(ProductSlice);

const product: Product = {
  id: "1",
  name: "Product",
  price: "100",
  image: "https://via.placeholder.com/150",
  createdAt: new Date().toString(),
  description: "Description",
  model: "Model",
  brand: "Brand",
};

describe("ProductItem", async () => {
  beforeEach(() => {
    vitest.mock("@/stores/product/hooks", () => ({
      useCart: () => [],
    }));
  });

  it("renders the product item", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductItem product={product} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(
      screen.getByText(formatPrice(Number(product.price)), { exact: false })
    ).toBeInTheDocument();

    expect(screen.getByRole("img")).toHaveAttribute("src", product.image);
  });
});

it("when the product is in the cart, it renders the quantity buttons", async () => {
  vitest.mock("@/stores/product/hooks", () => ({
    useCart: () => [product],
  }));

  render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductItem product={product} />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByTestId("decrement-quantity")).toBeInTheDocument();
  expect(screen.getByTestId("increment-quantity")).toBeInTheDocument();
});
