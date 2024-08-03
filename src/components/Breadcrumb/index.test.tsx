import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { BreadcrumbDisplay } from "./";

describe("Breadcrumb", () => {
  it("パンくずの内容が表示できる", async () => {
    renderTestComponent(<BreadcrumbDisplay />);

    const breadcrumb = screen.getByRole("navigation", {
      name: "breadcrumb",
    });
    expect(breadcrumb).toBeInTheDocument();

    const items = within(breadcrumb)
      .getAllByRole("listitem")
      .map((i) => {
        const link = within(i).queryByRole("link");
        return link === null
          ? {
              text: i.textContent,
              href: "",
            }
          : {
              text: link.textContent,
              href: link.getAttribute("href"),
            };
      });
    expect(items).toEqual([
      {
        text: "Home",
        href: "#",
      },
      {
        text: "一覧",
        href: "#",
      },
      {
        text: "アイテム1",
        href: "",
      },
    ]);
  });
});
