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
            
        })
        .catch((err) => {
            alert(err.response.message)
        })
}

export const deleteVote = (action, id) => {
    axios.delete(`${BASE_URL}/${action}/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((res) => {
            
        })
        .catch((err) => {
            alert(err.response.message)
        })

}