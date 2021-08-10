import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import {createComment} from '../../services/comment'
import { useParams } from 'react-router'

import {ContainerGeral, Input, Button, ContainerLogo, ImgLogo} from './styledForm'
import ImageIcone from '../../assets/logo2.png'

const PostCommentForm = () => {
    const [form, onChange, clear] = useForm({ body: ""})
    const params = useParams()

    const onSubmitForm = async(event) => {
        event.preventDefault()
        const res = await createComment(form, params.id, clear)
        document.location.reload(true);    
    }

    return(
        <form onSubmit={onSubmitForm}>
            <ContainerGeral>
            <ContainerLogo>
                    <ImgLogo src={ImageIcone} />
                </ContainerLogo>
                <div>
                    <Input
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        placeholder={"Escreva um comentário..."}
                        required
                    />
                </div>
                <Button type={'submit'}> Comentar </Button>
            </ContainerGeral>
        </form>
    )
}

export default PostCommentForm