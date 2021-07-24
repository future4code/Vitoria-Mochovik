import React from 'react'
import useUnprotectedrotectedPage from '../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'

import ImagemIcone from '../../assets/logo2.png'
import {ContainerGeral, ContainerButton, IconePerfil, Button} from './styledPage'
import { CardLogin } from './styled'

const LoginPage = () => {
    useUnprotectedrotectedPage()
    return(
        <ContainerGeral>
            <IconePerfil src={ImagemIcone} />
            <CardLogin>
                <LoginForm />
            <ContainerButton>
                <Button> Cadastrar </Button>
            </ContainerButton>
            </CardLogin>
            
            
        </ContainerGeral>
    )
}

export default LoginPage