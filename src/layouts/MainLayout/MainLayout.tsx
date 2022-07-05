//Lib
import Footer from "@Common/Footer/Footer";
//Components
import Header from "@Common/Header/Header";
import React from "react";
//Styled
import styles from "./MainLayout.module.less";
import {Outlet} from "react-router"

interface IProps {
  something?:string
}

const MainLayout = (props: IProps) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Outlet}>{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;