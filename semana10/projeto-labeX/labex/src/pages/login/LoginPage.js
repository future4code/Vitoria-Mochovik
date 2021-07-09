import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const token = window.localStorage.getItem("token")
    if(token) {
        history.push("/admin/trips/list")
    }

    const goBack = () => {
        history.goBack()
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const verifyAuthorization = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/login`
        const body = {
            email: email,
            password: password,
        }

        axios.post(url, body)
        .then((res) => {
            console.log("result", res.data)
            window.localStorage.setItem("token", res.data.token)
            history.push("/admin/trips/list")
        }) 
        .catch((err) => {
            console.log("aquii errouuuuuu", err.response)
        })
    }


    return(
        <div>
            <p> LoginPage</p>
            <input placeholder={"E-mail"} value={email} onChange={onChangeEmail}/>
            <input 
                placeholder={"Password"} 
                type="password"
                value={password} 
                onChange={onChangePassword} 
            />
            <button onClick={verifyAuthorization}> Entrar </button>
            <button onClick={goBack}> Voltar</button>
        </div>
    )
}
export default LoginPage