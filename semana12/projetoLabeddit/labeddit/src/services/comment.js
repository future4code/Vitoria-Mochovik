import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const createComment = (body, id, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
      .then((res) => {
          console.log("comentado", res.data.message)
          clear()

      })
      .catch((err) => {
          alert(err.response.message)
      })
}