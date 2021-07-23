import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToPostDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import PostForm from './PostForm'


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log("posts", posts)

    const onClickCard = (id) => {
        goToPostDetails(history, id)
    }

    const postCard = posts.map((post) => {
        return(
            <div key={post.id} onClick={() =>onClickCard(post.id)}>
                <h4> {post.username} </h4>
                <h6 > {post.title}</h6>
                <p> {post.body} </p>
            </div>
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