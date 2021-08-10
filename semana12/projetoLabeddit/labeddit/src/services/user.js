import axios from "axios"
import { BASE_URL } from '../constants/urls'
import {goToFeed} from '../routes/coordinator'


export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => {
            console.log("Erro no login, por favor tente novamente")
        })
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => {
          console.log("Erro no cadastro", err.message)  
        })
}