import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    const title = screen.getByRole("heading");
    expect(title.textContent).toBe("This is App");
  });

  it("should increment count", async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole("button", {
      name: "Click",
    });
    const count = screen.getByLabelText("Count:");
    expect(count.textContent).toBe("0");
    await user.click(button);
    expect(count.textContent).toBe("1");
  });
});
