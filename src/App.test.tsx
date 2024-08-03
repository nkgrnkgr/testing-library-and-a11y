import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    const title = screen.getByRole("heading");
    expect(title.textContent).toBe("This is App");
  });
});
