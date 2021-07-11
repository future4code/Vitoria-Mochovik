import axios from 'axios'
import React from  'react'
import useForm from '../hooks/useForm'
import {useHistory} from "react-router-dom"


const CreateTripPage = () => {
    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
        

    })
    const history = useHistory()
    const token = window.localStorage.getItem("token")

    const create = (event) =>{
        event.preventDefault()

        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-mochovik-molina/trips`
        const headers = {
            auth: token
        }

        axios.post(url, form, {headers})
        .then((res) => {
            console.log("deu certo viagem criada", res.data)
            cleanFields()
        })
        .catch((err) => {
            console.log("deu erro para criar ", err.message)
        })


    }

    const goBack = () => {
        history.goBack()
    }
    return(
        <div>
            <p> CreateTripPage</p>
            <form onSubmit={create}>
                <input 
                    name="name"
                    type="name"
                    placeholder={"Nome"} 
                    value={form.name} 
                    onChange={onChange}
                    required
                />
                <select name="planet" onChange={onChange} required>
                    <option value="Escolha um planeta"> Escolha um planeta</option>
                    <option value="Mercurio"> Mercurio </option>
                    <option value="Venus"> Venus </option>
                    <option value="Terra"> Terra </option>
                    <option value="Marte"> Marte </option>
                    <option value="Jupiter"> Jupiter </option>
                    <option value="Saturno"> Saturno </option>
                    <option value="Urano"> Urano </option>
                    <option value="Netuno"> Netuno </option>
                    <option value="Plutao"> Plutão </option>
                    
                </select>
                <input 
                    name="date"
                    type="date"
                    value={form.date} 
                    onChange={onChange}
                    required
                />
                <input 
                    name="description"
                    type="text"
                    placeholder={"Descrição"} 
                    value={form.description} 
                    onChange={onChange}
                    required
                />
                 <input 
                    name="durationInDays"
                    type="number"
                    placeholder={"Duração em dias"} 
                    value={form.durationInDays} 
                    onChange={onChange}
                    required
                    
                />
                
                <button> Criar </button>
            </form>
            <button onClick={goBack}> Voltar </button>
        </div>
    )
}
export default CreateTripPage