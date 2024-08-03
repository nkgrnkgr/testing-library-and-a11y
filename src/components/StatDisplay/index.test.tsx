import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { StatDisplay } from "./";

describe("Stat", () => {
  it("Statの内容が表示されること", async () => {
    renderTestComponent(<StatDisplay />);
    const statTitle = screen.getByRole("term");
    expect(statTitle).toHaveTextContent("日経平均株価");
    const definitions = screen.getAllByRole("definition");
    const textContents = definitions.map((d) => d.textContent);
    expect(textContents).toEqual([
      "35,909.70",
      "decreased by−2,216.63 (5.81%)今日",
    ]);
  });
});
