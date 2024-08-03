import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { CodeDisplay } from "./";

describe("Code", () => {
  it("コードが表示されている", async () => {
    renderTestComponent(<CodeDisplay />);
    const code = screen.getByRole("code", {
      name: "JavaScript Code!",
    });
    expect(code).toBeInTheDocument();
  });
});
