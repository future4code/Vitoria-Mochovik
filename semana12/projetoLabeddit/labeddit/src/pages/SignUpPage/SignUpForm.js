import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {signUp} from '../../services/user'

const SignUpForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({  username: "", email: "", password: "",})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log("requisicao", form)
        signUp(form, clear, history)
    }
    return(
        <form onSubmit={onSubmitForm}>
            <div>
                <input
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    placeholder={"Nome de Usuário"}
                    required
                    type={"username"}
                />
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
            > Cadastrar </button> 
        </form>
    )
}

export default SignUpForm