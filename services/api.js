/**
 * The service file for connect to backend.
 *
 * @package services
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * */

const axios = require('axios')
const API_BASE_URL = 'http://localhost:4000/api'

class ApiService {
    getGlobalVariables(){
        return axios.post(API_BASE_URL + '/get-global-variables')
    }
    index(loginState){
        return axios.get(API_BASE_URL + '/', loginState)
    }
    login(authData) {
        return axios.post(API_BASE_URL + '/login', authData)
    }
}

export default new ApiService()