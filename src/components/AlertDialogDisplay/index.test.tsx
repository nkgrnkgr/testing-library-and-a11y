import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { AlertDialogDisplay } from "./";

describe("AlertDialogDisplay", () => {
  it("ボタン押下でダイアログが開く", async () => {
    renderTestComponent(<AlertDialogDisplay />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "警告ダイアログを開く",
    });
    await user.click(button);

    const dialog = await screen.findByRole("alertdialog", {
      name: "削除の確認",
    });
    expect(dialog).toBeInTheDocument();
  });

  it("キャンセルボタン押下でダイアログを閉じる", async () => {
    renderTestComponent(<AlertDialogDisplay />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "警告ダイアログを開く",
    });
    await user.click(button);

    const dialog = await screen.findByRole("alertdialog", {
      name: "削除の確認",
    });

    const cancelButton = within(dialog).getByRole("button", {
      name: "キャンセル",
    });
    await user.click(cancelButton);

    // ダイアログが閉じていることを確認
    expect(
      screen.queryByRole("alertdialog", { name: "削除の確認" }),
    ).toBeNull();
  });
});
