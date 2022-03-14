import HelmetTag from "@Common/HelmetTag/HelmetTag";
import meta from "@Metas/home";
import React from "react";
import styles from "./Home.module.less"
const Home = (props: any) => {
  // console.log(( global as any).socket);
  //FUNCTION
  const funcHandleObject = {
    doSomeThing: ({ }) => {

    }
  }
  return (
    <div className={styles.Page}>
      <HelmetTag meta={meta} />
      Home
    </div>
  );
};

export default Home;
