import React from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router-dom'

import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

const PostDetailsPage = () => {
    useProtectedPage()

    const params = useParams()
    const post = useRequestData( {}, `${BASE_URL}/posts/${params.id}/comments`)[0]

    console.log("post details", post)
    return(
        <div>
            PostDetailsPage
        </div>
    )
}

export default PostDetailsPage