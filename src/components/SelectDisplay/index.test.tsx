import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { SelectDisplay } from "./";

describe("Select", () => {
  it("Selectが正しく動くこと", async () => {
    renderTestComponent(<SelectDisplay />);
    const user = userEvent.setup();
    const combobox = screen.getByRole("combobox", {
      name: "ユーザー区分",
    });
    await user.click(combobox);
    await user.selectOptions(combobox, "corporation");
    expect(combobox).toHaveValue("corporation");
  });
});
