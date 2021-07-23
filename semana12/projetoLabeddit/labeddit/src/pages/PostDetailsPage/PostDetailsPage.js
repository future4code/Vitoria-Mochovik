import React from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'
import {changeVote, createvote} from '../../services/vote'

import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import PostCommentForm from './PostCommentForm'

const PostDetailsPage = () => {
    useProtectedPage()

    const params = useParams()
    const comentarios = useRequestData( [], `${BASE_URL}/posts/${params.id}/comments`)


    const onClickVote = (userVote, direction, id) => {
        console.log("userbvot", userVote)
        if(userVote !== null) {
            if(userVote !== direction){
                changeVote("comments",direction, id)
            }
        } else {
            createvote("comments", direction, id)
        }
        
    }

    const comentario = comentarios.map((item) => {
        return(
            <div key={item.id}>
                <h3>{item.username}</h3>
                <p> {item.body} </p>
                <p> Meu voto {item.userVote}</p>
                <p> Soma dos votos {item.voteSum}</p>
                <p onClick={() => onClickVote(item.userVote, 1, item.id)}> &#128316;</p>
                <p onClick={() => onClickVote(item.userVote, -1, item.id)}>&#128317;</p>
            </div>
        )

    })

    console.log("post details", comentarios)
    return(
        <div>
            <p>PostDetailsPage </p>
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