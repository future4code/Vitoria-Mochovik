import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import {createComment} from '../../services/comment'
import { useParams } from 'react-router'


const PostCommentForm = () => {
    const [form, onChange, clear] = useForm({ body: ""})
    const params = useParams()
    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, params.id, clear)
    }

    return(
        <form onSubmit={onSubmitForm}>
            <div>
                <div>
                    <input
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        placeholder={"Descrição"}
                        required
                    />
                </div>
                <button type={'submit'}> Comentar </button>
            </div>
        </form>
    )
}

export default PostCommentForm