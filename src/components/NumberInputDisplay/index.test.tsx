import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { NumberInputDisplay } from "./";

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/alert_role
describe("NumberInput", () => {
  it("数値のみが入力できる", async () => {
    renderTestComponent(<NumberInputDisplay />);
    const user = userEvent.setup();

    const numberInput = screen.getByRole("spinbutton", {
      name: "数値入力",
    }) as HTMLInputElement;
    expect(numberInput.value).toBe("10");
    await user.clear(numberInput);
    await user.type(numberInput, "999");
    expect(numberInput.value).toBe("999");
    await user.type(numberInput, "{arrowup}");
    expect(numberInput.value).toBe("1000");
    await user.type(numberInput, "{arrowdown}");
    expect(numberInput.value).toBe("999");
  });
});
