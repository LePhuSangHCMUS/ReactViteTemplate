import React, { useReducer } from "react";

// Usage
function App(){
    const [isOn, toggleIsOn] = useToggle();
    
    return (
      <button onClick={toggleIsOn}>
        Turn  {isOn ? 'Off' : 'On'}
      </button>
    );
  }
// Hook
function useToggle(initialValue = false){
  // Returns the tuple [state, dispatch]
  // Normally with useReducer you pass a value to dispatch to indicate what action to
  // take on the state, but in this case there's only one action.
  return useReducer((state) => !state, initialValue);
}

export default useToggle;
