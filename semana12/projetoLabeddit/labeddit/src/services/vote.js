import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const createvote = (direction, id) => {
    console.log("directio chega", direction)
    const body = {
        direction: direction
        
    }

    console.log("body", body)
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
      .then((res) => {
        console.log("consegui", res.data)

      })
      .catch((err) => {
          alert(err.response.message)
      })
}