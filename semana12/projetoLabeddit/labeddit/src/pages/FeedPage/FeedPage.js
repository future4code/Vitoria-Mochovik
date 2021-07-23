import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToPostDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import PostForm from './PostForm'
import {createvote} from '../../services/vote'
import {CardPost} from './styled'


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    
    console.log("posts", posts)

    const onClickCard = (id) => {
        goToPostDetails(history, id)
    }

    const onClickVote = (direction, id) => {
        createvote(direction, id)
    }

    const postCard = posts.map((post) => {
        return(
            <CardPost key={post.id} >
                <div onClick={() =>onClickCard(post.id)}>
                    <h4> {post.username} </h4>
                    <h6 > {post.title}</h6>
                    <p> {post.body} </p>
                </div>
                <p onClick={() => onClickVote(1, post.id)}> &#128316;</p>
                <p onClick={() => onClickVote(-1, post.id)}>&#128317;</p>
            </CardPost>
        )
    })
    return( 
        <div>
            FeedPage
            <PostForm />
            <div>
                {postCard}
            </div>
        </div>
    )
}

export default FeedPage