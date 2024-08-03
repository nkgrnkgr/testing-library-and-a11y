import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./Provider";
import { AlertDialogDisplay } from "./components/AlertDialogDisplay";
import { AlertDisplay } from "./components/AlertDisplay";
import { Contents } from "./components/Contents";
import { DrawerDisplay } from "./components/DrawerDisplay";
import { Loading } from "./components/Loading";
import { MenuDisplay } from "./components/MenuDisplay";
import { ModalDisplay } from "./components/ModalDisplay";
import { PopoverDisplay } from "./components/PopoverDisplay";
import { Progressbar } from "./components/Progressbar";
import { TabAndContents } from "./components/TabAndContents";
import { Toast } from "./components/Toast";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Contents>
        <PopoverDisplay />
        <ModalDisplay />
        <MenuDisplay />
        <DrawerDisplay />
        <AlertDialogDisplay />
        <Toast />
        <Loading />
        <Progressbar />
        <TabAndContents />
        <AlertDisplay />
      </Contents>
    </Provider>
  </React.StrictMode>,
);
