import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const createvote = (action, direction, id) => {
    console.log("directio chega", direction)
    const body = {
        direction: direction
        
    }

    console.log("body", body)
    axios.post(`${BASE_URL}/${action}/${id}/votes`, body, {
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

export const changeVote = (action, direction, id) => {
    const body = {
        direction: direction
    }

    axios.put(`${BASE_URL}/${action}/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            console.log("conseguiu a change")
        })
        .catch((err) => {
            alert(err.response.message)
        })
}