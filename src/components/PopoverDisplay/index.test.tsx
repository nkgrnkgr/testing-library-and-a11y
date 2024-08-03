import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { PopoverDisplay } from "./";

describe("ModalDisplay", () => {
  it("設定ボタン押下でメニューが表示される", async () => {
    renderTestComponent(<PopoverDisplay />);

    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "ポップオーバーを開く" });
    await user.click(button);

    const dialog = await screen.findByRole("dialog", {
      name: "ポップオーバー",
    });
    expect(dialog).toBeInTheDocument();

    const closeButton = within(dialog).getByRole("button", {
      name: "Close",
    });
    await user.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeNull();
    });
  });
});
