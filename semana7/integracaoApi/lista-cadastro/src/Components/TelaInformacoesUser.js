import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


export default class TelaInformacoesUser extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.irParaListaPessoasCadastradas}> Voltar</button>
            </div>
        )
    }
}