import React, {useState} from 'react';
import axios from 'axios'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
        }) 
        .catch((err) => {
            console.log("aquii errouuuuuu", err.response)
        })
    }
console.log("email", email)
        console.log("senha", password)
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
        </div>
    )
}
export default LoginPage