import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "./Provider";
import { TabAndContents } from "./components/TabAndContents";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
      <TabAndContents />
    </Provider>
  </React.StrictMode>,
);
