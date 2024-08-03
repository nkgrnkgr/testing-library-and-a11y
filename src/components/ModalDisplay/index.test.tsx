import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { ModalDisplay } from "./";

describe("ModalDisplay", () => {
  it("設定ボタン押下でメニューが表示される", async () => {
    renderTestComponent(<ModalDisplay />);

    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "モーダルを開く" });
    await user.click(button);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeInTheDocument();

    const closeButton = within(dialog).getByRole("button", {
      name: "閉じる",
    });
    await user.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).toBeNull();
    });
  });
});
