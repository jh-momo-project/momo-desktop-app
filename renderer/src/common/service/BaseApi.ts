import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface ApiRequestConfig extends AxiosRequestConfig {
  isAuthRequired?: boolean;
  isCurrencyRequired?: boolean;
}

// TODO : 서버 배포 후 BASE_URL 변경
// const BASE_URL = process.env.SS_API_BASE_URL;
const BASE_URL = "http://localhost:3000";

export default class BaseApi {
  client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: `${BASE_URL}${baseUrl}`,
    });
  }

  addAuthHeader(config: ApiRequestConfig = {}) {
    const { isAuthRequired, ...axiosConfig } = config;
    return {
      ...axiosConfig,
      headers: {
        ...(config.headers || {}),
      },
    };
  }

  async get<T = any>(url: string, config?: ApiRequestConfig) {
    const result = await this.client.get<T>(url, config);
    return result.data;
  }

  async put<T = any>(url: string, data?: any, config?: ApiRequestConfig) {
    const result = await this.client.put<T>(url, data, config);
    return result.data;
  }

  async post<T = any>(url: string, data?: any, config?: ApiRequestConfig) {
    const result = await this.client.post<T>(url, data, config);
    return result.data;
  }

  async delete<T = any>(url: string, config?: ApiRequestConfig) {
    const result = await this.client.delete<T>(url, config);
    return result.data;
  }
}
