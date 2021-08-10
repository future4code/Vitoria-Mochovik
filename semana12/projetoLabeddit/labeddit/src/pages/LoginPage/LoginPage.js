import React from 'react'
import useUnprotectedrotectedPage from '../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import ImagemIcone from '../../assets/logo2.png'
import {ContainerGeral, ContainerButton, IconePerfil, Button} from './styledPage'
import { CardLogin } from './styled'
import {goToSignUp} from '../../routes/coordinator'

const LoginPage = () => {
    useUnprotectedrotectedPage()

    const history = useHistory()
    return(
        <ContainerGeral>
            <IconePerfil src={ImagemIcone} />
            <CardLogin>
                <LoginForm />
            <ContainerButton>
                <Button onClick={() => goToSignUp(history)}> Cadastrar </Button>
            </ContainerButton>
            </CardLogin>
        </ContainerGeral>
    )
}

export default LoginPage