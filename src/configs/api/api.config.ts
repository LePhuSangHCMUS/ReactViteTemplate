import * as qs from "qs";
import { PathLike } from "fs";
const REACT_BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(REACT_BASE_URL);

const  apiConfig :any= {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL:REACT_BASE_URL,
    headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}
export default apiConfig