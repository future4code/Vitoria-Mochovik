import React, {useState} from 'react'
import useForm from '../../hooks/useForm'
import {createPost} from '../../services/post'


import {ContainerInputs,InputDescricao, InpuTitulo,
    ContainerButton, Button, Form} from './styledForm'
const PostForm = () => {
    const [form, onChange, clear] = useForm({ title: "", body: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear)
    }

    return(
        <Form onSubmit={onSubmitForm}>
                <ContainerInputs>
                    <InpuTitulo 
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        placeholder={"Titulo"}
                        required
                    />
                    <InputDescricao
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        placeholder={"Descrição"}
                        required
                    />
                </ContainerInputs>
                <ContainerButton>
                    <Button type={'submit'}> POSTAR </Button>
                </ContainerButton>
        </Form>
    )
}

export default PostForm