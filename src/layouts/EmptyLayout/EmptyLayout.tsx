//Lib
import React from "react";
//Styled
import styles from "./EmptyLayout.module.scss";
interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;
  return (
    <div className={styles.Layout}>
      <div className={styles.Children}>{children}</div>
    </div>
  );
};

export default DefaultLayout;