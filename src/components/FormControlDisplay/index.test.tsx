import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { FormControlDisplay } from "./";

describe("FormControl", () => {
  it("Emailの入力ができる", async () => {
    renderTestComponent(<FormControlDisplay />);
    const user = userEvent.setup();

    const emailInput = screen.getByRole("textbox", {
      name: "Email",
    }) as HTMLInputElement;
    expect(emailInput.value).toBe("xxx@gmail.com");
    await user.clear(emailInput);
    expect(
      screen.getByText("Emailのフォーマットが正しくありません"),
    ).toBeInTheDocument();
  });
});
