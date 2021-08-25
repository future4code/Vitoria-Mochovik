import { Request, Response } from "express";
import updateUser from "../data/updateUser";
import { User } from '../types';
import { connection } from "../data/functions/connection";
import validadeEmail from "../data/functions/validateEmail";


export default async function editUser(req: Request, res: Response){
    try {
        if(
            req.body.name === "" ||
            req.body.nickname === "" ||
            req.body.email === ""
        ) {
            throw new Error("None of the fields can be empty");
        }
        if(!req.body.name && !req.body.email && !req.body.nickname){
            throw new Error("Choose at least one field to change");
        }

        const resultBusca = await connection.raw(`
            SELECT * FROM to_do_list_users
        `)

        const listUsers: Array<User> = resultBusca[0]
        console.log("user", listUsers)
        const indexOfName = listUsers.findIndex(person => person.name === req.body.name)
        const indexOfEmail = listUsers.findIndex(person => person.email === req.body.email)
        const indexOfNickname = listUsers.findIndex(person => person.nickname === req.body.nickname)
        
        if(indexOfName !== -1  || indexOfEmail !== -1 || indexOfNickname !== -1){
            if(indexOfName !== -1  && indexOfEmail !== -1 && indexOfNickname !== -1){
                throw new Error("Name, email and nickname already registered ");
            } else if(indexOfName !== -1  && indexOfEmail !== -1 ){
                throw new Error("Name and email already registered ");
            } else if(indexOfName !== -1  && indexOfNickname  !== -1){
                throw new Error("Name and nickname already registered ");
            } else if(indexOfEmail !== -1 && indexOfNickname !== -1 ){
                throw new Error("Email and nickname already registered ");
            } else if(indexOfName !== -1){
                throw new Error("Name already registered ");
            } else if(indexOfNickname  !== -1){
                throw new Error("Nickname already registered ");
            } else if(indexOfEmail !== -1){
                throw new Error("Email already registered ");
            } 
        }

        if(req.body.email && !validadeEmail(req.body.email)){
            throw new Error("Enter a valid email address");
        }
        
        
        
        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({
            message: "User updated succefully!",
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}