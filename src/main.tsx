import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./Provider";
import { AlertDialogDisplay } from "./components/AlertDialogDisplay";
import { AlertDisplay } from "./components/AlertDisplay";
import { BreadcrumbDisplay } from "./components/Breadcrumb";
import { CheckboxDisplay } from "./components/Checkbox";
import { CodeDisplay } from "./components/CodeDisplay";
import { Contents } from "./components/Contents";
import { DividerDisplay } from "./components/DividerDisplay";
import { DrawerDisplay } from "./components/DrawerDisplay";
import { ImageDisplay } from "./components/ImageDisplay";
import { LinkDisplay } from "./components/Link";
import { ListDisplay } from "./components/ListDisplay";
import { Loading } from "./components/Loading";
import { MenuDisplay } from "./components/MenuDisplay";
import { ModalDisplay } from "./components/ModalDisplay";
import { PopoverDisplay } from "./components/PopoverDisplay";
import { Progressbar } from "./components/Progressbar";
import { StatDisplay } from "./components/StatDisplay";
import { TabAndContents } from "./components/TabAndContents";
import { TableDisplay } from "./components/Table";
import { Toast } from "./components/Toast";
import { TooltipDisplay } from "./components/Tooltip";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Contents>
        <CheckboxDisplay />
        <LinkDisplay />
        <BreadcrumbDisplay />
        <TableDisplay />
        <StatDisplay />
        <ListDisplay />
        <DividerDisplay />
        <CodeDisplay />
        <ImageDisplay />
        <TooltipDisplay />
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
