import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const createComment = async(body, id, clear) => {
    const res = await axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    alert(res.data.message)
    return res
}