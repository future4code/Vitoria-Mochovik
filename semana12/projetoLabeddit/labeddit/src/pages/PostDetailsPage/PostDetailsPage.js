import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import {changeVote, createvote,deleteVote} from '../../services/vote'
import Header from '../../components/header/Header'
import { CardComentario, CardVote, ImgFlecha, CardInformation, CardAction } from './styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import PostCommentForm from './PostCommentForm'

import ImageFlechaBaixo from '../../assets/flecha-baixo.png'
import ImageFlechaCima from '../../assets/flecha-cima.png'
import ImagemBaixoPreenchida from '../../assets/flecha-baixo-preenchida.png'
import ImagemCimaPreenchida from '../../assets/flecha-cima-preenchida.png'
import { CardPost } from '../FeedPage/CardPost'


const PostDetailsPage = () => {
    useProtectedPage()

    const params = useParams()
    const [comentarios, setComentarios] = useRequestData( [], `${BASE_URL}/posts/${params.id}/comments`)
    const [post, setPost] = useState()

    useEffect(() => {
        const auxiliar = window.localStorage.getItem("post")
        setPost(JSON.parse(auxiliar))
    }, [])

    const onClickVoteComent = ( userVote, direction, id) => {
        console.log("userbvot", userVote)
        
        if(userVote !== null) {
            if(userVote !== direction){
                changeVote("comments", direction, id)
                changeVoteState(direction, id, userVote)
 
            } else if (Number(userVote) === Number(direction) ){
                deleteVote("comments", id)
                changeVoteState(direction, id, userVote)
            }
        } else {
            createvote("comments", direction, id)
            changeVoteState(direction, id, userVote)

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

    const changeVoteState = (direction, id, userVote) => {
        const newComentarios = comentarios.map((comentario) => {
            if(id === comentario.id && userVote && Number(userVote) === Number(direction)){
                return{
                    ... comentario, userVote: null, voteSum: Number(comentario.voteSum) + Number(direction*-1)
                }
            } else if(id === comentario.id && userVote) {
                return{
                    ... comentario, userVote: direction, voteSum: Number(comentario.voteSum) + 2*Number(direction)
                }
            } else if(id === comentario.id){
                return{
                    ... comentario, userVote: direction, voteSum: Number(comentario.voteSum) + Number(direction)
                }
            }
            else {
                return comentario
            }
        })
        setComentarios([...newComentarios])
    }

    const comentario = comentarios.map((item) => {
        return(
            <CardComentario key={item.id}>
                 <CardVote>
                    <ImgFlecha src={changeImageCima(item.userVote)} onClick={() => onClickVoteComent(item.userVote, 1, item.id)}/>
                    { item.voteSum === null ? 
                        <p> <b> 0 </b></p>
                    : <p> <b> {item.voteSum} </b></p>}
                    <ImgFlecha src={changeImageBaixo(item.userVote)}  onClick={() => onClickVoteComent(item.userVote, -1, item.id)}/>
                </CardVote>
                <CardInformation>
                   <h3>{item.username}</h3>
                    <p> {item.body} </p> 
                    <CardAction>
                        <p> Curtir</p>
                        <p> Comentar</p>
                        <p> Compartilhar</p>
                    </CardAction>
                </CardInformation>
                
            </CardComentario>
        )

    })

    const onClickVote = (userVote, direction, id) => {
        console.log("userbvot", userVote)
        console.log("direction", direction)

        if(userVote !== null) {
            if(Number(userVote) !== Number(direction)){
                changeVote("posts", direction, id)
                changeVoteState1(direction, id, userVote)
                
            } else if (Number(userVote) === Number(direction) ){
                deleteVote("posts", id)
                changeVoteState1(direction, id, userVote)
            }
        } else {
            createvote("posts", direction, id)
            changeVoteState1(direction, id, userVote)
            console.log("estou onde nao deveria")
            
        }
        
    }
    

    const changeVoteState1 = (direction, id, userVote) => {
        
        let newPost 
        if(id === post.id && userVote && Number(userVote) === Number(direction)){
            newPost = {
                ... post, userVote: null, voteSum: Number(post.voteSum) + Number(direction*-1)
            }
        } else if(id === post.id && userVote) {
            newPost = {
                ... post, userVote: direction, voteSum: Number(post.voteSum) + 2*Number(direction)
            }
        }  else if(id === post.id){
            console.log("ṕrimeiro votoo")
            newPost = {
                ... post, userVote: direction, voteSum: Number(post.voteSum) + Number(direction)
            }
        } 
        else {
            newPost= post
        }
        
        setPost(newPost)
    }


    console.log("post details", comentarios)
    return(
        <div>
            <Header />
            { post && 
            <CardPost 
                post={post} 
                changeImageCima={changeImageCima} 
                changeImageBaixo={changeImageBaixo}
                onClickCard={() => {}}
                onClickVote={onClickVote}
            
            /> }
            <PostCommentForm />
            
            <div>
                {comentarios.length > 0 ? 
                    <div> 
                        {comentario}
                    </div>
            
            : <p>Sem comentarios </p>}
            </div>
        </div>
    )
}

export default PostDetailsPage