import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from '/home/vitoria/Documents/Repositorios/Vitoria-Mochovik/semana5/labedin/src/img/WhatsApp Image 2020-09-07 at 10.12.47.jpeg'
import IconeEmail from '/home/vitoria/Documents/Repositorios/Vitoria-Mochovik/semana5/labedin/src/img/icone-email.png'
import IconeCasa from '/home/vitoria/Documents/Repositorios/Vitoria-Mochovik/semana5/labedin/src/img/icone-casa.png'
import styled from 'styled-components'


function App() {

  const ContainerBig = styled.div ` 
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
  `

  const ImagemBigCard = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
  
  `
  const TextoCard = styled.h4 `
    margin-bottom: 15px;
  
  `

  const TituloETexto = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  `
  const Button = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
  `

  const ImageButton = styled.img `
    width: 30px;
    margin-right: 10px;
  `
  const ContainerSmall = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    height: 80px;
    margin-bottom: 10px;
  
  `

  const ImageSmall = styled.img `
    width: 60px;
    margin-right: 10px;
    margin-left: 10px;
  
  `

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
      <ContainerBig>   
        <CardGrande>
          <ImagemBigCard imagem={ImagemPerfil} />
          <TituloETexto>
            <TextoCard nome="Vitória Carolina Mochovik" />
              descricao="Oi, eu sou a Vitória. Sou estudante de engenharia de computação na UFSC e aluna da Labenu."
            </TituloETexto> 
        </CardGrande>
      </ContainerBig>
      
        <ImagemButton>
          <Button>
           <ImageButton imagem="https://image.flaticon.com/icons/png/512/117/117472.png" />
            texto="Ver mais"
          </Button>
        </ImagemButton>

        <ContainerSmall>
          <CardPequeno>
            <ImageSmall imagem={IconeEmail} />
            nome="Email:"
            descricao="vitoriacarolinemochovik@gmail.com"
          </CardPequeno>
        </ContainerSmall>  

        <ContainerSmall>
          <CardPequeno>
            <ImageSmall imagem={IconeCasa} />
            nome="Endereço:"
            descricao="Rua Genésio Ronconi, nº 134, Urussanguinha, Araranguá"
          </CardPequeno>
        </ContainerSmall>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <ContainerBig>
          <CardGrande>
            <ImagemBigCard imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" />
            nome="Tratare" 
            descricao="Auxiliar de escritório" 
          </CardGrande>
        </ContainerBig>
        {/* <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        /> */}
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton> 
          <Button>
            <ImageButton imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" />
            texto="Facebook" 
          </Button>
        </ImagemButton>       

        <ImagemButton>
          <Button> 
            <ImageButton imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
            texto="Twitter" 
          </Button>
        </ImagemButton>       
      </div>
    </div>
  );
}

export default App;
