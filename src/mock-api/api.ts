import {db} from "./config";
 const dbLocal:any=db;
const loginAPI=({username,password}:any)=>{
    dbLocal?.data?.posts.push('hello world')
    dbLocal.write().then((result:any)=>{
         
    })
    .catch((err:any)=>{

    })
}

export {loginAPI}