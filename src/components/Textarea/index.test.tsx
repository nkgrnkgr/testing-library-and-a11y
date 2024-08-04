import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { TextareaDisplay } from "./";

const TEXT = `
Hello
world
`;

describe("Textarea", () => {
  it("Textareaが表示されている", async () => {
    renderTestComponent(<TextareaDisplay />);
    const user = userEvent.setup();
    const textarea = screen.getByRole("textbox", {
      name: "コメント",
    }) as HTMLInputElement;
    expect(textarea.textContent).toBe("");

    await user.type(textarea, TEXT);
    expect(textarea.textContent).toBe(TEXT);
  });
});
