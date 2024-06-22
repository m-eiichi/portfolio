import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/ui_parts/header";

import Styles from "./main_layout.module.css";

export const MainLayout = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={Styles.wrapper}>
        <div className={Styles.inner}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
