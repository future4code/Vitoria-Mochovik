import React from 'react';


export default class TelaListaPessoasCadastradas extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.irParaCadastro}> Ir para cadastro </button>
            </div>
        )
    }
}