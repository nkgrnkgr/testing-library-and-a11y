import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { ImageDisplay } from "./";

describe("Image", () => {
  it("画像が表示されている", async () => {
    renderTestComponent(<ImageDisplay />);
    const image = screen.getByRole("img", {
      name: "150 x 150 placeholder",
    });
    expect(image).toBeInTheDocument();
  });
});
