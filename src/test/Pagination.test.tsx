import Pagination from "@/components/home/pagination";
import store from "@/stores";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, it } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { expect, vitest } from "vitest";
import { afterEach } from "node:test";

describe("Pagination", () => {
  beforeEach(() => {
    vitest.mock("@/stores/product/hooks", () => ({
      useFilterOptions: () => ({
        sort: "price-low-high",
        brands: [],
        models: [],
        search: "",
        page: 1,
      }),
    }));
  });

  afterEach(() => {
    vitest.clearAllMocks();
  });

  it("renders pagination buttons when page 1 and pageCount 5", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination pageCount={5} />
        </BrowserRouter>
      </Provider>
    );

    const paginationButtons = screen.getAllByRole("button");
    expect(paginationButtons).toHaveLength(6); // 5 page buttons + 1 next button

    const activePageButton = screen.getByText("1");
    expect(activePageButton).toHaveClass(
      "bg-white shadow-card hover:bg-white hover:text-primary"
    );
  });
});
