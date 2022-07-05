

//Lib
//Component
import { Image, Select } from "antd";
//Styled Component
import "antd/dist/antd.css";
import React from 'react';
//Const
import { countryFlags } from "./const";

interface IProps {
  onChangeLanguage: any;
}
const { Option } = Select;


const ButtonSwitchLanguage: React.FC<IProps> = (props) => {
  const langType = localStorage.getItem('lang');
  const { onChangeLanguage } = props
  return (
    <Select
      style={{ width: "80px" }}
      // showSearch
      defaultValue={langType ? langType : "en"}
      onChange={(value) => {
        onChangeLanguage(value)
      }}
    >
      {countryFlags.map(item => {
        return <Option key={item.key}
          value={item.value}
        >
          <img style={{width: "30px"}}  src={item.flagIcon} alt={item.alt} />
        </Option>
      })}
    </Select>
  );
};

export default ButtonSwitchLanguage;