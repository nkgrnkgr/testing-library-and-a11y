import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { assertExists } from "../../testFunctions/assertExists";
import { renderTestComponent } from "../../testFunctions/renderTestComponent";
import { TableDisplay } from "./";

describe("TabAndContents", () => {
  it("選択したタブの内容が表示されている", async () => {
    renderTestComponent(<TableDisplay />);
    const table = screen.getByRole("table", { name: "日本の人口推移" });
    expect(table).toBeInTheDocument();
    const rowgroup = within(table).getAllByRole("rowgroup");
    const headers = within(rowgroup[0])
      .getAllByRole("columnheader")
      .map((header) => header.textContent);
    const yearIndex = headers.indexOf("年");
    const populationIndex = headers.indexOf("人口");
    const increaseRateIndex = headers.indexOf("増加率(%)");
    const tableBodyRows = rowgroup[1];
    const rows = within(tableBodyRows).getAllByRole("row");
    const year1975Row = rows.find((row) => {
      const cells = within(row).getAllByRole("cell");
      return cells[yearIndex].textContent === "1975";
    });
    assertExists(year1975Row);
    expect(
      within(year1975Row).getAllByRole("cell")[populationIndex],
    ).toHaveTextContent("1億1190万人");
    expect(
      within(year1975Row).getAllByRole("cell")[increaseRateIndex],
    ).toHaveTextContent("34.5%");
  });
});
