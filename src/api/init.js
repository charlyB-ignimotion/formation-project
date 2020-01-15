import axios from 'axios';
import ResponseErrorHandler from "./ResponseErrorHandler";

export function initApi({ token } = {}) {

    const responseErrorHandler = new ResponseErrorHandler({errors: import('@/constants/errors')});

    const instance = axios.create({
        baseURL: 'https://reqres.in/api/',
        timeout: 3000,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    instance.interceptors.response.use(function (response) {
        return response
    }, function (err) {
        // CALL API POST ERROR => table
        responseErrorHandler.checkError(err)
    });

    return instance
}
