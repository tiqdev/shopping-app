import { vitest, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FilterSort from "@/components/home/filter-sort";
import { afterEach, describe, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/stores";

describe("FilterSort", () => {
  afterEach(() => {
    vitest.clearAllMocks();
  });

  it("renders sort options correctly", async () => {
    vitest.mock("@/stores/product/hooks", () => ({
      useFilterOptions: () => ({
        sort: "price-low-high",
        brands: [],
        models: [],
        search: "",
        page: 1,
      }),
    }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilterSort screen="desktop" />
        </BrowserRouter>
      </Provider>
    );

    const sortOptions = [
      { label: "Old to New", value: "old-new" },
      { label: "New to Old", value: "new-old" },
      { label: "Price Low to High", value: "price-low-high" },
      { label: "Price High to Low", value: "price-high-low" },
    ];

    sortOptions.forEach((option) => {
      const radioInput = screen.getByLabelText(option.label);
      expect(radioInput).toBeInTheDocument();
    });

    const radioInput = screen.getByLabelText("Price Low to High");
    await expect(radioInput).toBeChecked();
  });
});
