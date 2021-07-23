import React, {useState} from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToPostDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import PostForm from './PostForm'
import {changeVote, createvote} from '../../services/vote'
import Header from '../../components/header/Header'
import {CardPost, ImgFlecha, CardVote, CardName, CardAction, CardInformation} from './styled'
import ImageFlechaBaixo from '../../assets/flecha-baixo.png'
import ImageFlechaCima from '../../assets/flecha-cima.png'
import ImageComentario from '../../assets/comentario.png'
import ImageSalvar from '../../assets/salvar.png'
import ImageCompartilhar from '../../assets/flecha-compartilhar.png'



const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    
    
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

    const postCard = posts.map((post) => {
        return(
            <CardPost key={post.id} >
                <CardVote>
                    <ImgFlecha src={ImageFlechaCima} />
                    <p> <b> {post.voteSum} </b></p>
                    <ImgFlecha src={ImageFlechaBaixo} />
                </CardVote>
                <CardInformation> 
                    <div onClick={() =>onClickCard(post.id)}>
                        <CardName>
                            <h6> {post.username} </h6>
                            <p> {post.createdAt} </p>
                        </CardName>
                        <h6 > {post.title}</h6>
                        <p> {post.body} </p>
                        <p> Meu voto{post.userVote}</p>
                    </div>
                    <CardAction>
                        <ImgFlecha src={ImageComentario} />
                        <ImgFlecha src={ImageSalvar} />
                        <ImgFlecha src={ImageCompartilhar} />
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

export default FeedPage