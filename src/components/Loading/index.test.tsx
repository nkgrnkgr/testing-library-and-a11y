import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { Loading } from "./";

// https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/alert_role
describe("Loading", () => {
  it("ローディングが表示されている", async () => {
    renderTestComponent(<Loading />);
    const loading = screen.getByRole("alert");
    expect(loading).toBeInTheDocument();
  });
});
