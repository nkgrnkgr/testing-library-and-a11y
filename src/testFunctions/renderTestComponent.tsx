import { render } from "@testing-library/react";
import { Provider } from "../Provider";

export function renderTestComponent(components: JSX.Element) {
  render(<Provider>{components}</Provider>);
}
