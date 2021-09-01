import { Request, Response } from "express";
import insertUser from "../data/insertUser"
import { connection } from '../data/functions/connection';
import { User } from '../types';
import validadeEmail from '../data/functions/validateEmail';



export default async function createUser(req: Request, res: Response) {
    try {
        const { name, nickname, email } = req.body

        if(!name || !nickname || !email ) {
            throw new Error("Please, fill in the three fields: name, nickname and email")   
        }

        if( typeof name != "string" || typeof nickname != "string" || typeof email != "string"){
            throw new Error("All fields must be of type string");
        }

        const resultBusca = await connection.raw(`
            SELECT * FROM to_do_list_users
        `)

        
        const listUsers: Array<User> = resultBusca[0]
        const indexOfName = listUsers.findIndex(person => person.name === name)
        const indexOfEmail = listUsers.findIndex(person => person.email === email)
        const indexOfNickname = listUsers.findIndex(person => person.nickname === nickname)


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

        if(!validadeEmail(email)){
            throw new Error("Enter a valid email address");
        }

        const id: string = Date.now() + Math.random().toString()
        await  insertUser(
            id,
            req.body.name,
            req.body.email,
            req.body.nickname
        )

        res.status(200).send("User created successfully!")

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
