//Lib
import loginState from "@Recoils/Login/atom";
//Component
import React from "react";
import { useRecoilState } from "recoil";

//Styled Component
//Img
//Const
const ErrorFallback = (props: any) => {

  const {error, resetErrorBoundary =()=>{}}= props;
  const [text, setText] = useRecoilState(loginState);
  console.log("[ErrorFallback]", text);
  return <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
};

export default ErrorFallback;
