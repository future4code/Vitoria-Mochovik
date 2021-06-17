import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BackgroundImage from '../img/back-loguin.png'
import ImagemIcone from '../img/icone-perfil4.png'


    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const headers = {
        headers: {
            Authorization: "vitoria-mochovik-molina"
        }
    }

const Background = styled.div`
  background-image: url(${BackgroundImage});
  margin: 0px;
  padding: 0px;
  height: 100vh;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    margin: 0px;
  }
`

const CardCadastro = styled.div`
  background-color: rgb(255, 255, 255, 0.7);
  align-items: center;
  justify-content: center;
  padding: 35px;
  border-radius: 15px;
  margin: 0px 500px 0px 500px; 
  height: 150px;

 
`

const Input = styled.input `
  width: 300px;
  margin-top: 25px;
  height: 25px;
`

const Button = styled.button`

  height: 35px;
  width: 100px;

`

const IconePerfil = styled.img`
  width: 100px;
  background-color: #340059;
  border-radius: 150px;
  margin-bottom: 280px;
 position: absolute;
  
  

`

const ContainerButton = styled.div`
   
   display: flex;
   justify-content:center;
   align-items: center;
   margin-top: 20px;

`

const ContainerIcone = styled.div`
  
  border-left: 1px solid black;
  
`

const ContainerBotaoLista = styled.div`
  margin-top: 35px;
`

const ButtonLista = styled.button`
  width: 15
  0px;
`

export default class Cadastro extends React.Component {

    state = {
        listPessoas: [],
        inputEmail: "",
        inputName: ""
      }
    
      onChangeInputNome = (event) => {
        this.setState({ inputName: event.target.value })
      }
    
      onChangeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value})
      }
    
      criarUsuario = () => {
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail,
        }
    
        axios
          .post(url, body, headers)
          .then((res) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({ inputName: "", inputEmail: ""})
            
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }
    

      oonClick =() => {
        console.log("telacadastro")
        this.props.irParaListaPessoasCadastradas()
      }
    
    


    render() {
        return (
            <Background>
              {/* <ContainerIcone> */}
                <IconePerfil src={ImagemIcone} />
              {/* </ContainerIcone> */}
              
              <CardCadastro>
                
                {/* <p> Nome: </p> */}
                <Input 
                  value={this.state.inputName} 
                  onChange={this.onChangeInputNome} 
                  placeholder={"Nome"}
                /> 
                {/* <p> E-mail</p> */}
                <Input 
                  value={this.state.inputEmail} 
                  onChange={this.onChangeInputEmail} 
                  placeholder={"E-mail"} 
                />
                <ContainerButton>
                  <Button onClick={this.criarUsuario}> Salvar</Button>
                </ContainerButton>
              </CardCadastro>
              <ContainerBotaoLista>
                <ButtonLista onClick={this.oonClick} > Ver lista de usuários</ButtonLista> 
              </ContainerBotaoLista>
            </Background>
        )
    }
}

// this.props.irParaListaPessoasCadastradas