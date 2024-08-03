import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { TabAndContents } from "./";

describe("TabAndContents", () => {
  it("選択したタブの内容が表示されている", async () => {
    renderTestComponent(<TabAndContents />);
    const user = userEvent.setup();

    const tabPanel1 = screen.getByRole("tabpanel", { name: "One" });
    expect(tabPanel1).toBeInTheDocument();

    const tab2 = screen.getByRole("tab", { name: "Two" });
    await user.click(tab2);

    expect(screen.getByRole("tabpanel", { name: "Two" })).toBeInTheDocument();
  });
});
