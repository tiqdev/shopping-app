import CartIconButton from "@/components/main-layout/cart-button";

import { beforeEach, describe } from "vitest";
import { afterEach, expect, it, vi, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@/stores";

vitest.mock("@/stores/product/hooks");
vitest.mock("@/lib/utils");
vitest.mock("@/hooks/useIsMobile");
vitest.mock("@/stores/product/actions");

describe("CartIconButton", () => {
  beforeEach(() => {
    vitest.mock("@/lib/utils", () => ({
      formatPrice: vi.fn((price: number) =>
        price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      ),
    }));

    vitest.mock("@/stores/product/hooks", () => ({
      useCartProductsCount: vi.fn(() => 4),
      useCartTotalPrice: vi.fn(() => 50),
      useIsMobile: vi.fn(() => false),
    }));
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  it("renders the cart icon button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartIconButton />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass(
      "flex items-center justify-end h-9 rounded-lg transition-colors relative gap-2 min-w-[140px]"
    );
  });

  it("renders the cart products count when it is greater than 0", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartIconButton />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("renders the cart total price when it is greater than 0", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartIconButton />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("50.00₺")).toBeInTheDocument();
  });
});
