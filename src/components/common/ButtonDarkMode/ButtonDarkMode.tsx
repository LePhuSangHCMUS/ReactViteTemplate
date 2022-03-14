//Lib
//Component
import React from "react";
import useDarkMode from "use-dark-mode";
//Styled Component
import styles from "./ButtonDarkMode.module.less";
//Const

const ButtonDarkMode = (props: any) => {
const {toggleTheme,theme} =props;
  return (
    <div className={styles.Component}>
      <input type="checkbox" id="theme-toggle" defaultChecked={theme === 'dark' ? true : false} />
      <label
        htmlFor="theme-toggle"
        onClick={() => {
          toggleTheme()
        }}>
        <span></span>
      </label>
    </div>
  );
};

export default ButtonDarkMode;
