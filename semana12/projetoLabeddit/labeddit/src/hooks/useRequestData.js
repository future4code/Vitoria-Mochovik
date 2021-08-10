import { useEffect, useState} from 'react'
import axios from "axios"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const token = localStorage.getItem("token")
    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])
    return ([data, setData])
}

export default useRequestData