import React from 'react'
import styled from 'styled-components'



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
            <div>
                <input
                    value={this.state.valorInputNomeUsuario}
                    onChange={this.onChangeInputNomeUsuario}
                    placeholder={'nome de usuario'}
                />
                <input
                    value={this.state.valorInputFotoUsuario}
                    onChange={this.onChangeInputFotoUsuario}
                    placeholder={'foto usuario'}
                />
                <input
                    value={this.state.valorInputFotoPost}
                    onChange={this.onChangeInputFotoPost}
                    placeholder={'foto do post'}
                />
                <button onClick={this.adicionaPost} >Adicionar</button>
            </div>
        )
    }
}