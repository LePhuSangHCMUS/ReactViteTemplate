import { Api } from "@Configs/api/api";
import apiConfig from "@Configs/api/api.config";
import { IUserProfile } from "@Interfaces/user";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

//API ENDPOINT
 const API_LOAD_SETTING="/identity/load-setting"
//===============================================
class BaseApi extends Api {
    public constructor (config: AxiosRequestConfig) {
        super(config);
        this.loadSetting = this.loadSetting.bind(this);
    }
    public loadSetting (): Promise<any > {
        return this.get<IUserProfile>(API_LOAD_SETTING)
            .then((response: AxiosResponse<IUserProfile>) => {
                const { data } = response;
                const state: any = {
                  
                };

                return state;
            })
            .catch((error: AxiosError) => {
                throw error;
            });
    }
}

const baseApi = new BaseApi(apiConfig);
export default baseApi