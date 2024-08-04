import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { RadioDisplay } from "./";

describe("Radio", () => {
  it("Statの内容が表示されること", async () => {
    renderTestComponent(<RadioDisplay />);
    const user = userEvent.setup();
    const radioGroup = screen.getByRole("radiogroup", {
      name: "ユーザー区分",
    });
    const radioIndividual = within(radioGroup).getByRole("radio", {
      name: "個人",
    }) as HTMLInputElement;
    const radioCorporation = within(radioGroup).getByRole("radio", {
      name: "法人",
    }) as HTMLInputElement;
    const radioEtc = within(radioGroup).getByRole("radio", {
      name: "その他",
    }) as HTMLInputElement;
    expect(radioIndividual.checked).toBe(true);
    expect(radioCorporation.checked).toBe(false);
    expect(radioEtc.checked).toBe(false);

    await user.click(radioCorporation);
    expect(radioIndividual.checked).toBe(false);
    expect(radioCorporation.checked).toBe(true);
    expect(radioEtc.checked).toBe(false);
  });
});
