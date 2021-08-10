import React from 'react'
import { useHistory } from 'react-router-dom'
import {goBack} from '../../routes/coordinator'
import { useParams } from 'react-router'
import {ContainerGeral, ImgLogo, ImgTitulo, ContainerMarca, Button}  from './styled'
import Logo from '../../assets/logo2.png'
import Titulo from '../../assets/logomarca2.png'

const Header = () => {

    let urlAtual = (window.location.href).split("/")
    console.log("url atual", urlAtual)
    const history = useHistory()
    
    const clicKGoBack = () => {
        goBack(history)
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        history.push("/login")
    }
    return(
        <ContainerGeral>
            <ContainerMarca>
                <ImgLogo src={Logo} />
                <ImgTitulo src={Titulo} />
            </ContainerMarca>
            { urlAtual.length >= 6 &&
            <div>
                <Button> LOGOUT </Button>
                <Button onClick={clicKGoBack}> Voltar </Button>
            </div>}
            { urlAtual.length < 6 && 
            <div>
                <Button onClick={logout}> LOGOUT </Button>
            </div>}
            
        </ContainerGeral>
    )
}

export default Header