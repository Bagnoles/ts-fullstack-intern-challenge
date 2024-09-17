import axios, { AxiosError, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import { getToken } from './token';

type ErrorMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    timeout: TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Auth-Token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const errorMessage = (error.response.data);
        toast.warn(errorMessage.message);
      }
      throw error;
    }
  );

  return api;
};