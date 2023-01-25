import axios, { Axios } from 'axios'

const API_URL = '/api/users/'

//regoster user

const register = async (userData) => {

    const response = await axios.post(API_URL, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}
const login = async (userData) => {

    const response = await axios.post(API_URL + 'login', userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    console.log("logout2")
    localStorage.removeItem('user')
}
const authService = {
    register,
     logout,
     login
}
export default authService;