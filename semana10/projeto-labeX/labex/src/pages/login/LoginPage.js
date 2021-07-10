import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import useForm from '../hooks/useForm'


const LoginPage = () => {
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })
    const history = useHistory()

    const token = window.localStorage.getItem("token")
    if(token) {
        history.push("/admin/trips/list")
    }

    const goBack = () => {
        history.push("/")
    }

    const toEnter = (event) => {
        event.preventDefault();
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/login`
        axios.post(url, form)
        .then((res) => {
            console.log("result", res.data)
            window.localStorage.setItem("token", res.data.token)
            cleanFields()
            history.push("/admin/trips/list")
        }) 
        .catch((err) => {
            console.log("aquii errouuuuuu", err.response)
        })
    }

    // const verifyAuthorization = () => {
    //     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/login`
    //     const body = {
    //         email: email,
    //         password: password,
    //     }

    //     axios.post(url, body)
    //     .then((res) => {
    //         console.log("result", res.data)
    //         window.localStorage.setItem("token", res.data.token)
    //         history.push("/admin/trips/list")
    //     }) 
    //     .catch((err) => {
    //         console.log("aquii errouuuuuu", err.response)
    //     })
    // }



    return(
        <div>
            <p> LoginPage</p>
            <form onSubmit={toEnter}> 
                <input 
                    name="email"
                    type="email"
                    placeholder={"E-mail"} 
                    value={form.email} 
                    onChange={onChange}
                    required
                />
                <input 
                    name="password"
                    type="password"
                    placeholder={"Password"} 
                    value={form.password} 
                    onChange={onChange} 
                    required
                />
                <button > Entrar </button>
            </form>
            <button onClick={goBack}> Voltar</button>
        </div>
    )
}
export default LoginPage