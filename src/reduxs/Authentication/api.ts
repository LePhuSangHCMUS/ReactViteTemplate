import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ILoginCredentials, IRegisterCredentials } from "@Interfaces/credentials";
import { IUserProfile } from "@Interfaces/user";
import apiConfig from "@Configs/api/api.config"
import { Api } from "@Configs/api/api";

//API ENDPOINT
 const API_LOGIN="/identity/auth"
 const API_REGISTER="/api_registany"
//===============================================
class BaseApi extends Api {
    public constructor (config: AxiosRequestConfig) {
        super(config);
        this.loginUser = this.loginUser.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    /**
     *
     * @param {object} credentials - user's identifications.
     * @param {string} credentials.email - user's email.
     * @param {string} credentials.password - user's password.
     * @returns {Promise<UserState>} userState - user information,
     */
    public loginUser (credentials: ILoginCredentials): Promise<any > {

        console.log(credentials);

        return this.post<IUserProfile>(API_LOGIN, JSON.stringify(credentials))
            .then((response: AxiosResponse<IUserProfile>) => {
                const { data } = response;
                const state: IUserProfile = {
                    address: data.address,
                    companyDetails: data.companyDetails,
                    dateOfBirth: data.dateOfBirth,
                    email: data.email,
                    firstName: data.firstName,
                    lastName:data.lastName,
                    isAdmin:data.isAdmin,
                    isSaleManager: data.isSaleManager,
                    isSaleManager2: data.isSaleManager2,
                    isSeller: data.isSeller,
                    permissions:data.permissions,
                    phone:data.phone,
                    photo: data.photo,
                    views:data.views
                };

                return state;
            })
            .catch((error: AxiosError) => {
                throw error;
            });
    }

    /**
     * Adds a new user into our system.
     *
     * @param {object} RegisterCredentials - user basic info.
     * @param {string} RegisterCredentials.firstName.
     * @param {string} RegisterCredentials.secondName.
     * @param {string} RegisterCredentials.lastName.
     * @param {string} RegisterCredentials.secondLastName.
     * @param {string} RegisterCredentials.email.
     * @param {string} RegisterCredentials.password.
     * @param {string} RegisterCredentials.password2.
     * @returns {Promise<number>} status code of `CREATED`.
     */
    public registerUser (credrentials: IRegisterCredentials): Promise<number> {
        return this.post<number>(API_REGISTER, JSON.stringify(credrentials))
            .then((registered: AxiosResponse<number>) => {
                const { status } = registered;
                return status;
            })
            .catch((error: AxiosError) => {
                throw error;
            });
    }
}

const baseApi = new BaseApi(apiConfig);
export default baseApi