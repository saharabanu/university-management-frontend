import { authKey } from '@/constants/storage';
import { ResponseSuccessType } from '@/types';
import { getFromLocalStorage } from '@/utils/local-storage';
import axios from 'axios'
const instance = axios.create();
instance.defaults.headers.post['Content-Type']= 'application/json';

instance.defaults.headers
['Accept']= 'application/json';
instance.defaults.timeout= 60000;


//interceptor


// Add a request interceptor
instance.interceptors.request.use(function (config) {

    const accessToken = getFromLocalStorage(authKey);
    if(accessToken){
        config.headers.Authorization = accessToken
    }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
//@ts-ignore
instance.interceptors.response.use(function (response) {
    const responseObject:ResponseSuccessType = {
      data:response?.data?.data,
      meta:response?.data?.meta
    }
    return responseObject;
  }, function (error) {
    const responseObject = {
      statusCode:error?.response?.data?.statusCode || 500,
      message:error?.response?.data?.message || " Something Went Wrong",
      errorMessages:error?.response?.data?.message
    }
    return responseObject;
  });





  export {instance}