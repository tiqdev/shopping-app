import CartItem from "@/components/main-layout/cart-item";
import store from "@/stores";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { describe, expect, it } from "vitest";

describe("CartItem", () => {
  const mockProduct = {
    id: "1",
    name: "Test Product",
    price: "10.99",
    image: "https://via.placeholder.com/150",
    createdAt: new Date().toString(),
    description: "Description",
    model: "Model",
    brand: "Brand",
    quantity: 1,
  };

  it("renders product name and price", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartItem product={mockProduct} />
        </BrowserRouter>
      </Provider>
    );

    const productName = screen.getByText("Test Product");
    const productPrice = screen.getByText("10.99₺");

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
});
