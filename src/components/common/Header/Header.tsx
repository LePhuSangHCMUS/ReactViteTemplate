//Lib
//Icon
import {logo} from "@Assets/icons";
import ButtonSwitchLanguage from "@Common/ButtonSwitchLanguage/ButtonSwitchLanguage";
//Component
import React from "react";
import { useTranslation } from 'react-i18next';
import { Link,NavLink } from "react-router-dom";
//Const
import { headerData } from "./const";
//styled
import styles from "./Header.module.less";
const Header = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className={styles.Component}>
      <Link  to="/">
        <img src={logo} alt="Icon" />
      </Link>
      <div className={styles.Navigator}>
        {headerData.map((item, index) => {
          return <NavLink key={index} to={item.path}  >{t(item.keyLang)}</NavLink>
        })}
      </div>
      <div className={styles.ButtonLanguage}>
        <ButtonSwitchLanguage onChangeLanguage={(langType: string) => {
          i18n.changeLanguage(langType);
          localStorage.setItem('lang', langType)
        }} />
      </div>
    </div>
  );
};

export default Header;
