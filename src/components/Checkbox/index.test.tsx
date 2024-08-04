import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { CheckboxDisplay } from "./";

describe("Checkbox", () => {
  it("チェックボックスのチェックがつくこと", async () => {
    renderTestComponent(<CheckboxDisplay />);

    const checkbox = screen.getByRole("checkbox", {
      name: "Checkbox",
    }) as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});
