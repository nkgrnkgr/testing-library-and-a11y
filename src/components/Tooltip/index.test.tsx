import { logDOM, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { TooltipDisplay } from ".";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";

describe("Tooltip", () => {
  it("テキストにホバーするとツールチップを表示する", async () => {
    renderTestComponent(<TooltipDisplay />);
    const user = userEvent.setup();
    const text = screen.getByText("ツールチップを表示");
    await user.hover(text);

    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });
});
