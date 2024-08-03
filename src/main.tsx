import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./Provider";
import { AlertDisplay } from "./components/AlertDisplay";
import { Contents } from "./components/Contents";
import { TabAndContents } from "./components/TabAndContents";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Contents>
        <AlertDisplay />
        <TabAndContents />
      </Contents>
    </Provider>
  </React.StrictMode>,
);
