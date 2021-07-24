import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToPostDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import PostForm from './PostForm'
import {changeVote, createvote} from '../../services/vote'
import Header from '../../components/header/Header'
import {CardPost, ImgFlecha, CardVote, CardName, CardAction, 
    CardInformation, CardDescription, ImgIcone} from './styled'


import ImageFlechaBaixo from '../../assets/flecha-baixo.png'
import ImageFlechaCima from '../../assets/flecha-cima.png'
import ImageComentario from '../../assets/comentario.png'
import ImageSalvar from '../../assets/salvar.png'
import ImageCompartilhar from '../../assets/flecha-compartilhar.png'
import ImagemBaixoPreenchida from '../../assets/flecha-baixo-preenchida.png'
import ImagemCimaPreenchida from '../../assets/flecha-cima-preenchida.png'




const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    let posts = useRequestData([], `${BASE_URL}/posts`)
    
    // const pegaPosts = () => {
    //     posts = 
    // }

    // useEffect(() => {
    //     useRequestData([], `${BASE_URL}/posts`)
    // }, [])
    
    
    console.log("posts", posts)

    const onClickCard = (id) => {
        goToPostDetails(history, id)
    }

    
    const onClickVote = (userVote, direction, id) => {
        console.log("userbvot", userVote)
        if(userVote !== null) {
            if(userVote !== direction){
                changeVote("posts", direction, id)
                
            }
        } else {
            createvote("posts", direction, id)
            
        }
        
    }
    
    const changeImageCima = (userVote) => {
        if(userVote === null || userVote === -1 ){
            return ImageFlechaCima
        } else if ( userVote === 1) {
            return ImagemCimaPreenchida
        }

    }

    const changeImageBaixo = (userVote) => {
        if(userVote === null || userVote === 1) {
            return ImageFlechaBaixo
        } else if (userVote === -1) {
            return ImagemBaixoPreenchida
        }
    }

    const postCard = posts.map((post) => {
        return(
            <CardPost key={post.id} >
                <CardVote>
                    <ImgFlecha src={changeImageCima(post.userVote)} onClick={() => onClickVote(post.userVote, 1, post.id)}/>
                    { post.voteSum === null ? 
                        <p> <b> 0 </b></p>
                    : <p> <b> {post.voteSum} </b></p>}
                    <ImgFlecha src={changeImageBaixo(post.userVote)}  onClick={() => onClickVote(post.userVote, -1, post.id)}/>
                </CardVote>
                <CardInformation> 
                    <div onClick={() =>onClickCard(post.id)}>
                        <CardName>
                            <p> {post.username} </p>
                            {/* <p> {post.createdAt} </p> */}
                        </CardName>
                        <CardDescription> 
                            <h3 > {post.title}</h3>
                            <p> {post.body} </p>
                        </CardDescription>
                        {/* <p> Meu voto{post.userVote}</p> */}
                    </div>
                    <CardAction>
                        <ImgIcone src={ImageComentario} />
                        <p> {post.commentCount} Comentarios </p>
                        <ImgIcone src={ImageCompartilhar} />
                        <p> Compartilhar</p>
                        <ImgIcone src={ImageSalvar} />
                        
                    </CardAction>
                </CardInformation>
                {/* <p onClick={() => onClickVote(post.userVote, 1, post.id)}> &#128316;</p>
                <p onClick={() => onClickVote(post.userVote, -1, post.id)}>&#128317;</p> */}
            </CardPost>
        )
    })
    return( 
        <div>
            <Header />
            <PostForm />
            <div>
                {postCard}
            </div>
    
        </div> 

       
    )
}

export default FeedPage;