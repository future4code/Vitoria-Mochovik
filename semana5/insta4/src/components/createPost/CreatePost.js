import React from 'react'
import styled from 'styled-components'

const ContainerFormulario = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 15px;
    width: 300px;
`

const Input = styled.input `
    padding: 5px;
    margin-bottom: 15px;

`

const Button = styled.button `
    margin-bottom: 15px;
    height: 30px;
   
`

export default class CreatePost extends React.Component {
    state = {
        valorInputNomeUsuario: "",
        valorInputFotoUsuario: "",
        valorInputFotoPost: ""
    }

    onChangeInputNomeUsuario = (event) => {
        this.setState({ valorInputNomeUsuario: event.target.value})
    }

    onChangeInputFotoUsuario = (event) => {
        this.setState({ valorInputFotoUsuario: event.target.value})
    }

    onChangeInputFotoPost = (event) => {
        this.setState({ valorInputFotoPost: event.target.value})
    }

    adicionaPost = () => {
        const novoPost = {
            nomeUsuario: this.state.valorInputNomeUsuario,
            fotoUsuario: this.state.valorInputFotoUsuario,
            fotoPost: this.state.valorInputFotoPost
        }

        this.props.adicionarNovoPost(novoPost)

        this.setState({
            valorInputNomeUsuario: "",
            valorInputFotoUsuario: "",
            valorInputFotoPost: ""
        })
    }

    render() {
        return (
            <ContainerFormulario>
                <Input
                    value={this.state.valorInputNomeUsuario}
                    onChange={this.onChangeInputNomeUsuario}
                    placeholder={'nome de usuario'}
                />
                <Input
                    value={this.state.valorInputFotoUsuario}
                    onChange={this.onChangeInputFotoUsuario}
                    placeholder={'foto usuario'}
                />
                <Input
                    value={this.state.valorInputFotoPost}
                    onChange={this.onChangeInputFotoPost}
                    placeholder={'foto do post'}
                />
                <Button onClick={this.adicionaPost} >Adicionar</Button>
            </ContainerFormulario>
        )
    }
}