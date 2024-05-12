import { afterEach, describe, expect, it, vi, vitest } from "vitest";
import CartList from "@/components/main-layout/cart-list";
import { beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/stores";

describe("CartList", () => {
  beforeEach(() => {
    vitest.mock("@/stores/product/hooks", () => ({
      useCart: vi.fn(() => [
        {
          id: "1",
          name: "Test Product",
          price: "10.99",
          image: "https://via.placeholder.com/150",
          createdAt: new Date().toString(),
          description: "Description",
          model: "Model",
          brand: "Brand",
          quantity: 1,
        },
      ]),
      useCartProductsCount: vi.fn(() => 1),
      useCartTotalPrice: vi.fn(() => 10.99),
    }));
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  it("renders cart with products", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartList />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Total Price:")).toBeInTheDocument();

    const checkoutButton = screen.getByText("Checkout");
    expect(checkoutButton).toBeInTheDocument();
  });
});
