// eslint-disable-next-line import/no-named-as-default
import Axios, { type AxiosError, type AxiosInstance, } from 'axios';

const prod = 'https://api.bybit.com';
export const testUrl = 'https://api-testnet.bybit.com'
const axiosInstance: AxiosInstance = Axios.create({ baseURL: prod });


axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        console.error(error)
    },
);

export { axiosInstance };
