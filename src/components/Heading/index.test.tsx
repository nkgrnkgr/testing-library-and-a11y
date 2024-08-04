import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { HeadingDisplay } from "./";

describe("Heading", () => {
  it("ボタン押下でドロアーを表示する", async () => {
    renderTestComponent(<HeadingDisplay />);
    const heading = screen.getByRole("heading", {
      name: "見出し",
    });
    expect(heading).toBeInTheDocument();
  });
});
