import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import LoginPage from './LoginPage'
import {login} from '../../services/user'

import { CardLogin, Form, ContainerButton, 
     ButtonDestaque, Input} from './styled'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    
    return(
        
            <Form onSubmit={onSubmitForm}>
                <div>
                    <Input
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        placeholder={"E-mail"}
                        required
                        type={"email"}
                    />
                    <Input
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        placeholder={"Senha"}
                        required
                        type={"password"}
                    />
                </div>
                <ContainerButton>
                   <ButtonDestaque
                    type={"submit"}
                > Fazer Login </ButtonDestaque>  
                </ContainerButton>
                
            </Form>
        
    )
}

export default LoginForm