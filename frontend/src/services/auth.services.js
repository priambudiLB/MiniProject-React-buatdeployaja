import axios from 'axios'
import Cookies from 'js-cookie'

const baseURL = 'http://localhost:8080'

class AuthService {
    login(username, password) {
        return axios
        .post(baseURL + "signin", {
            username,
            password
        })
        .then(response => {
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, password, address, phone) {
        return axios.post(baseURL + "signup", {
            username,
            password,
            address,
            phone
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}
export default new AuthService();