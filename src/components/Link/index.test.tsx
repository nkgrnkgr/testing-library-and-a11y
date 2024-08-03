import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { LinkDisplay } from "./";

describe("Link", () => {
  it("リンクが表示されていること", async () => {
    renderTestComponent(<LinkDisplay />);
    const link = screen.getByRole("link", {
      name: "Github.com",
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toBe("https://github.com");
  });
});
