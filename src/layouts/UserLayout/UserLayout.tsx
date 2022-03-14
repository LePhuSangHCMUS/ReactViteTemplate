//Lib
import Footer from "@Common/Footer/Footer";
//Components
import Header from "@Common/Header/Header";
import React from "react";
//Styled
import styles from "./UserLayout.module.less";


interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles.Children}>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;