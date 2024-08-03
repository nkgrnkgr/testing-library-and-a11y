import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { Toast } from "./";

describe("Toast", () => {
  it("ボタンを押下すると、トーストが表示されメッセージが表示されている", async () => {
    renderTestComponent(<Toast />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "トーストを表示" });
    await user.click(button);

    // chakra-uiだとregionは最初から表示されているので、内部にテキストが出現したかどうかで判断する
    const notificationRegion = screen.getByRole("region", {
      name: "Notifications-bottom",
    });
    const toast = await within(notificationRegion).findByText(
      "入力に誤りがあります。",
    );
    expect(toast).toBeInTheDocument();
  });
});
