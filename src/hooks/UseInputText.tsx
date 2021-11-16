import React ,{ useState } from 'react';
// Usage
function App(){
    const { value, onChange, resetValue } = useInputText("");
    
    return (
      <input value={value} onChange={onChange} />
    );
  }
  
// Hook
 function useInputText (defaultValue:string){
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (event:React.FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    resetValue: () => setValue(''),
  };
};

export default useInputText