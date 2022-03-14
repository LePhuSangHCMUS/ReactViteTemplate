//Lib
import Footer from "@Common/Footer/Footer";
//Components
import Header from "@Common/Header/Header";
import * as actions from "@Reduxs/LoadSetting/action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
//Styled
import styles from "./DashboardLayout.module.less";

interface IProps {
}

const DashboardLayout = (props: IProps) => {
 const dispatch = useDispatch()
  useEffect(() => {
   dispatch(actions.loadSetting())
  }, [])
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Outlet}>{<Outlet/>}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;