import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { DividerDisplay } from "./";

describe("Divider", () => {
  it("Dividerが表示されている", async () => {
    renderTestComponent(<DividerDisplay />);
    const divider = screen.getByRole("separator", {
      name: "区切り",
    });
    expect(divider).toBeInTheDocument();
  });
});
