//Lib
import loginState from "@Recoils/Login/atom";
//Component
import React from "react";
// import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState } from "recoil";
import ErrorFallback from "@Components/common/ErrorFallback/ErrorFallback"

//Styled Component
//Img
//Const
class ErrorBoundary extends React.Component {
  state: any ;
  constructor(props:any) {
    super(props);
    this.state  = { hasError: false };
  }

  static getDerivedStateFromError(error:any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error:any, errorInfo:any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this?.state?.hasError as any) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// interface ErrorBoundaryFix extends React.Component { }

// const ErrorBoundaryFix = (ErrorBoundary as any)
// function Bomb() {
//    throw new Error('💥 KABOOM 💥');
//    return null
// }
const props: any = {
  FallbackComponent: ErrorFallback,
  onReset: () => {
    // reset the state of your app so the error doesn't happen again
  }

}

const SampleErrorBoundary = (props: any) => {
  const [explode, setExplode] = React.useState(false)
  const handleThrowError = () => {
    throw new Error('💥 KABOOM 💥');

  }

  const renderUI=()=>{
    try {
      return <div>{props.abc.xyz}</div>
    } catch (error) {
     return  <ErrorFallback error={error} />
    }
  }
  return<div>
          <button onClick={() => setExplode(e => !e)}>toggle explode</button>

          {renderUI()}
  </div>

};

export default SampleErrorBoundary;
