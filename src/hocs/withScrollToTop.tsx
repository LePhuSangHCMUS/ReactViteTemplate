import React, { useEffect } from 'react';
// *Usage

//import withScrollToTop from WithScrollToTop
// function Component(){
//     return (
//      <p> Use HOC <p />
//     );
//   }
//export default withScrollToTop(Component)

// *Hook
const  WithScrollToTop=(WrapperComponent:any)=> {

  const WithScrollToTopComponent= ()=> {
    // inside return function
    useEffect(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  
    }, []) 
     return <WrapperComponent />;
};
return WithScrollToTopComponent;

};

export default WithScrollToTop