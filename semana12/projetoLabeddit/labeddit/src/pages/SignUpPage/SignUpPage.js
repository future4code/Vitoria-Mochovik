import React from 'react'
import useUnprotectedrotectedPage from '../../hooks/useUnprotectedPage'
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
    useUnprotectedrotectedPage()
    return(
        <div>
            SignUpPage
            <SignUpForm />
        </div>
    )
}

export default SignUpPage