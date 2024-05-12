import SectionTitle from "@/components/home/section-title";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

// basic test
describe("SectionTitle", () => {
  it("renders the title", () => {
    render(<SectionTitle title="Your Cart" />);

    expect(
      screen.getByRole("heading", {
        name: /your cart/i,
      })
    );
  });
});
