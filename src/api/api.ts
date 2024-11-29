/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";

class BaseHttpService {
    get = <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.get<T, AxiosResponse<T>>(url, config).then((value) => value.data);

    post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.post<T, AxiosResponse<T>>(url, data, config).then((value) => value.data);

    patch = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.patch<T, AxiosResponse<T>>(url, data, config).then((value) => value.data);

    put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.put<T, AxiosResponse<T>>(url, data, config).then((value) => value.data);

    delete = <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> =>
        axiosInstance.delete<T, AxiosResponse<T>>(url, config).then((value) => value.data);
}

export const apiService = new BaseHttpService()