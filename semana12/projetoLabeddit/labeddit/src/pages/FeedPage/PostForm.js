import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import {createPost} from '../../services/post'

const PostForm = () => {
    const [form, onChange, clear] = useForm({ title: "", body: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
    }

    return(
        <form onSubmit={onSubmitForm}>
            <div>
                <div>
                    <input 
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        placeholder={"Titulo"}
                        required
                    />
                    <input
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        placeholder={"Descrição"}
                        required
                    />
                </div>
                <button type={'submit'}> Criar </button>
            </div>
        </form>
    )
}

export default PostForm