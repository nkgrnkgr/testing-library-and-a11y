import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./Provider";
import { AlertDisplay } from "./components/AlertDisplay";
import { Contents } from "./components/Contents";
import { Loading } from "./components/Loading";
import { Progressbar } from "./components/Progressbar";
import { TabAndContents } from "./components/TabAndContents";
import { Toast } from "./components/Toast";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Contents>
        <Toast />
        <AlertDisplay />
        <TabAndContents />
        <Progressbar />
        <Loading />
      </Contents>
    </Provider>
  </React.StrictMode>,
);
