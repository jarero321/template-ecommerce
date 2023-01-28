import { SnackbarUtilities } from './../utilities/snackbar-manager';
import axios, { AxiosRequestConfig } from 'axios';

let store: any;

export const AxiosInterceptor = () => {
  const updateHeaders = (request: AxiosRequestConfig) => {
    const token = window.localStorage.getItem('token') ?? '';
    if (token.length > 0) {
      const newHeaders = {
        Authorization: `Bearer ${token}`,
        'Content-type': 'aplication-json',
      };
      request.headers = newHeaders;
    }
    return request;
  };

  axios.interceptors.request.use((request) => {
    return updateHeaders(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      SnackbarUtilities.error(
        error.response.data.message ?? error.response.data
      );
      return Promise.reject(error);
    }
  );
};
