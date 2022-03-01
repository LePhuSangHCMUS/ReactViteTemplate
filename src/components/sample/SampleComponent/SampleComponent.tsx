//Lib
import loginState from "@Recoils/Login/atom";
//Component
import React from "react";
import { useRecoilState } from "recoil";

//Styled Component
//Img
//Const
const SampleComponent = (props: any) => {
  const [text, setText] = useRecoilState(loginState);
  console.log("[SampleComponent]", text);

  return <div>Sample Component</div>;
};

export default SampleComponent;
