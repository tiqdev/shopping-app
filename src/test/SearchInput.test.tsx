import SearchInput from "@/components/main-layout/search-input";
import store from "@/stores";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("SearchInput", () => {
  it("renders input field", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchInput />
        </BrowserRouter>
      </Provider>
    );

    // input alanını role ile bul
    const input = screen.getByRole("textbox");

    // input alanının belgede olup olmadığını kontrol et
    expect(input).toBeInTheDocument();
  });

  // create a test for the handleChange function
  it("handles the change event", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchInput />
        </BrowserRouter>
      </Provider>
    );

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "test");
    await new Promise((r) => setTimeout(r, 600));
    await screen.getByTestId("clear-search");

    expect(input).toHaveValue("test");
    expect(screen.getByTestId("clear-search")).toBeInTheDocument();
  });
});
