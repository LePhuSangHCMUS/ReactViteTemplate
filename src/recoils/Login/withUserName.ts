import {
  selector
} from 'recoil';
import loginAtom from "./atom";
const exampleWithUserName = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const loginData = `UserName: [${get(loginAtom).username}]` ;
      return loginData;
    },
    set:({set,get},value:any)=>{
        set(loginAtom,{...get(loginAtom),username:value})
    }
  });

  export default exampleWithUserName;