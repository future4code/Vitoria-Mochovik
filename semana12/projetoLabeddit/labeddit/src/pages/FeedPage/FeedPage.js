import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToPostDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import PostForm from './PostForm'
import {changeVote, createvote} from '../../services/vote'
import Header from '../../components/header/Header'
import {ImgFlecha, CardVote, CardName, CardAction, 
    CardInformation, CardDescription, ImgLogo, 
    ImgIcone, ContainerCriar, ContainerInputs,
    ContainerLogo} from './styled'

import ImageIcone from '../../assets/logo2.png'
import ImageFlechaBaixo from '../../assets/flecha-baixo.png'
import ImageFlechaCima from '../../assets/flecha-cima.png'
import ImageComentario from '../../assets/comentario.png'
import ImageSalvar from '../../assets/salvar.png'
import ImageCompartilhar from '../../assets/flecha-compartilhar.png'
import ImagemBaixoPreenchida from '../../assets/flecha-baixo-preenchida.png'
import ImagemCimaPreenchida from '../../assets/flecha-cima-preenchida.png'
import { CardPost } from './CardPost'




const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    let [posts, setPosts] = useRequestData([], `${BASE_URL}/posts`)
    
    
    console.log("posts", posts)

    const onClickCard = (id) => {
        goToPostDetails(history, id)
    }

    
    const onClickVote = (userVote, direction, id) => {
        console.log("userbvot", userVote)
        if(userVote !== null) {
            if(userVote !== direction){
                changeVote("posts", direction, id)
                changeVoteState(direction, id, userVote)
                
            }
        } else {
            createvote("posts", direction, id)
            changeVoteState(direction, id, userVote)
            
        }
        
    }
    

    const changeVoteState = (direction, id, userVote) => {
        const newPosts = posts.map((post) => {
            if(id === post.id && userVote) {
                return{
                    ... post, userVote: direction, voteSum: Number(post.voteSum) + 2*Number(direction)
                }
            } else if(id === post.id){
                return{
                    ... post, userVote: direction, voteSum: Number(post.voteSum) + Number(direction)
                }
            }
            else {
                return post
            }
        })
        setPosts([...newPosts])
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
            <CardPost 
                changeImageBaixo={changeImageBaixo}
                changeImageCima={changeImageCima}
                onClickCard={onClickCard}
                onClickVote={onClickVote}
                post={post}
            />
        )
    })
    return( 
        <div>
            <Header />
            <ContainerCriar>                    
                <ContainerLogo>
                    <ImgLogo src={ImageIcone} />
                </ContainerLogo>
                <ContainerInputs>
                    <PostForm />
                </ContainerInputs> 
            </ContainerCriar>
            
            <div>
                {postCard}
            </div>
    
        </div> 

       
    )
}

export default FeedPage;