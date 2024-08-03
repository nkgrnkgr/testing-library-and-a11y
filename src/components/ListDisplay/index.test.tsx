import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { ListDisplay } from "./";

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/alert_role
describe("List", () => {
  it("Listが表示されている", async () => {
    renderTestComponent(<ListDisplay />);
    const list = screen.getByRole("list", {
      name: "リスト",
    });
    expect(list).toBeInTheDocument();
    const listItems = within(list).getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    const textContents = listItems.map((i) => i.textContent);
    expect(textContents.sort()).toEqual(
      ["アイテム 1", "アイテム 2", "アイテム 3"].sort(),
    );
  });
});
