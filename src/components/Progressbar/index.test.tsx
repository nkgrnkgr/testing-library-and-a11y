import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { Progressbar } from "./";

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/progressbar_role
describe("Progressbar", () => {
  it("プログレスバーが表示されており、最小、最大、現在の値が設定されている", async () => {
    renderTestComponent(<Progressbar />);

    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveTextContent("40%");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
    expect(progressbar).toHaveAttribute("aria-valuenow", "40");
  });
});
