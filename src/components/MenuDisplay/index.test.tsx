import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { MenuDisplay } from "./";

describe("MenuDisplay", () => {
  it("設定ボタン押下でメニューが表示される", async () => {
    renderTestComponent(<MenuDisplay />);

    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "メニューを開く" });
    await user.click(button);

    const menu = await screen.findByRole("menu");
    const menuItems = within(menu).getAllByRole("menuitem");
    expect(menuItems).toHaveLength(4);
    const textContents = menuItems.map((i) => i.textContent);
    expect(textContents.sort()).toEqual(
      ["個人設定", "購入履歴", "アカウントの切り替え", "ログアウト"].sort(),
    );
  });
});
