import axios from 'axios'

const AxiosInstance = axios.create({
	baseURL: 'https://www.googleapis.com',

});

AxiosInstance.interceptors.response.use(function (response) {
    return response.data ? response.data : response;
  }, function (error) {
    return Promise.reject(error);
  });

export default AxiosInstance