//Lib
import React from "react";
import { Outlet } from "react-router";
//Styled
import styles from "./EmptyLayout.module.scss";
interface IProps {
}

const DefaultLayout = (props: IProps) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Outlet}>{<Outlet/>}</div>
    </div>
  );
};

export default DefaultLayout;