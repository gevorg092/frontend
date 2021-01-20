/**
 * Service File For Connect to the Backend.
 * */

const axios = require('axios')
const API_BASE_URL = 'http://localhost:4000/api'

class ApiService {
    index(loginState){
        return axios.get(API_BASE_URL + '/', loginState)
    }
    login(authData) {
        return axios.post(API_BASE_URL + '/login', authData)
    }
    home() {
        return axios.post(API_BASE_URL + '/')
    }
}

export default new ApiService()