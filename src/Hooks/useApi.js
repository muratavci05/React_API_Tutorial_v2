import axios from 'axios'

const useApi = () => {

    const baseApiUrl = "https://api.adoptez1artisan.com/"

    axios.defaults.baseURL = baseApiUrl

    const token = localStorage.getItem("token")

    if (token) { 
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}` }

    return axios

}

export default useApi