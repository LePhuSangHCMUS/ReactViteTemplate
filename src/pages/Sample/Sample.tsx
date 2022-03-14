import React from "react";
import styles from "./Sample.module.less";
import { Typography } from "antd"
import SampleErrorBoundary from "@Components/sample/SampleErrorBoundary/SampleErrorBoundary"

const { Title } = Typography
const Sample = (props: any) => {
  // console.log(( global as any).socket);
  //FUNCTION
  const funcHandleObject = {
    doSomeThing: ({ }) => {

    }
  }
  return (
    <div className={styles.Page}>

      <Title>Error Boundary</Title>
      <SampleErrorBoundary/>
     {/* ============================= */}

    </div>
  );
};

export default Sample;
