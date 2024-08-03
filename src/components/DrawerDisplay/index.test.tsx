import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { DrawerDisplay } from "./";

describe("DrawerDisplay", () => {
  it("ボタン押下でドロアーを表示する", async () => {
    renderTestComponent(<DrawerDisplay />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "ドロアーを開く",
    });
    await user.click(button);
    const drawer = await screen.findByRole("dialog", {
      name: "アカウントの作成",
    });
    expect(drawer).toBeInTheDocument();
  });

  it("キャンセルボタン押下でドロアーを閉じる", async () => {
    renderTestComponent(<DrawerDisplay />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "ドロアーを開く",
    });
    await user.click(button);
    const drawer = await screen.findByRole("dialog", {
      name: "アカウントの作成",
    });

    const cancelButton = within(drawer).getByRole("button", {
      name: "キャンセル",
    });
    await user.click(cancelButton);

    waitFor(() => {
      expect(
        screen.queryByRole("dialog", { name: "アカウントの作成" }),
      ).toBeNull();
    });
  });
});
