import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

const FeedPage = () => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    console.log("posts", posts)

    const postCard = posts.map((post) => {
        return(
            <div key={post.id}>
                <h4> {post.username} </h4>
                <p> {post.title}</p>
            </div>
        )
    })
    return(
        <div>
            FeedPage
            <div>
                {postCard}
            </div>
        </div>
    )
}

export default FeedPage