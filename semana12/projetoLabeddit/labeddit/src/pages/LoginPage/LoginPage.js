import React from 'react'
import useUnprotectedrotectedPage from '../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'

const LoginPage = () => {
    useUnprotectedrotectedPage()
    return(
        <div>
            LoginPage
            <LoginForm />
            <button> Cadastrar </button>
        </div>
    )
}

export default LoginPage