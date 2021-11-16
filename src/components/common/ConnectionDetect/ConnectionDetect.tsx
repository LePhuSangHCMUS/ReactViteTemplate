//Lib
import { message } from "antd";
import React, { Fragment } from "react";
import { Detector } from "react-detect-offline";
//Const

const ConnectionDetect = () => {
  return (
    <Detector
      render={({ online }) => <Fragment />}
      onChange={(value) => {
        if (value === true) {
          message.success({
            content: "Network connection established",
          });
        } else {
          message.error({
            content: "Seems there is no network connection",
          });
        }
      }}
    />
  );
};

export default ConnectionDetect;
