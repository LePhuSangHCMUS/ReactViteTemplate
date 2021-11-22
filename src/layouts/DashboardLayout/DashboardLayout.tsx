//Lib
import Footer from "@Common/Footer/Footer";
//Components
import Header from "@Common/Header/Header";
import React from "react";
//Styled
import styles from "./DashboardLayout.module.scss";


interface IProps {
  children?: React.ReactNode;
}

const DashboardLayout = (props: IProps) => {
  const { children } = props;
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Children}>{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;