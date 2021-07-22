import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import LoginPage from './LoginPage'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <div>
                    <input
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        placeholder={"E-mail"}
                        required
                        type={"email"}
                    />
                    <input
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        placeholder={"Senha"}
                        required
                        type={"password"}
                    />
                </div>
                <button
                    type={"submit"}
                > Fazer Login </button> 
            </form>
        </div>
    )
}

export default LoginForm