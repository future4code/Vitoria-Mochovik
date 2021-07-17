import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import useForm from '../hooks/useForm'
import { ContainerGeral, CardLogin, Form, ContainerButton, 
    Button, ButtonDestaque, Input, IconePerfil} from './styled'
import ImagemIcone from '../../img/icone-perfil2.png'


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

    return(
        <div>
            <ContainerGeral>
                <IconePerfil src={ImagemIcone} />
                <CardLogin>
                    <Form onSubmit={toEnter}> 
                        <Input 
                            name="email"
                            type="email"
                            placeholder={"E-mail"} 
                            value={form.email} 
                            onChange={onChange}
                            required
                        />
                        <Input 
                            name="password"
                            type="password"
                            placeholder={"Password"} 
                            value={form.password} 
                            onChange={onChange} 
                            required
                        />
                        <ContainerButton>
                            <ButtonDestaque > ENTRAR </ButtonDestaque>
                        </ContainerButton>
                    </Form>
                    <ContainerButton>
                        <Button onClick={goBack}> Voltar</Button>
                    </ContainerButton>
                    
                </CardLogin>
            </ContainerGeral>
        </div>
    )
}
export default LoginPage