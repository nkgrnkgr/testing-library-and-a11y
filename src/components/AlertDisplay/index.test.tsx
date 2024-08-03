import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { AlertDisplay } from "./";

describe("AlertDisplay", () => {
  it("アラートの内容が表示できる", async () => {
    renderTestComponent(<AlertDisplay />);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("アラート");
  });
});
