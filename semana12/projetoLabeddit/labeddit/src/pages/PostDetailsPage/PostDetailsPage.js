import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const PostDetailsPage = () => {
    useProtectedPage()
    return(
        <div>
            PostDetailsPage
        </div>
    )
}

export default PostDetailsPage