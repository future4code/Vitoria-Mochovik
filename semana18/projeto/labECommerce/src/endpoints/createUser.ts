import { Request, Response } from "express";
import { connection } from "../data/connection";
import insertUser from "../data/user/insertUser";

import User from "../entities/User"
import { findBodyDontHave } from "../functions/findBodyDontHave";
import { UserT } from "../types/user";

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, age} = req.body

        if(!name || !email || !age) {
            if(!name && !email && !age){
                throw new Error("Fill all fields");
            } else if(!name && !email){
                throw new Error("Fill in the 'name' and 'email' field");
            } else if(!name && !age){
                throw new Error("Fill in the 'name' and 'age' field");
            } else if(!email && !age){
                throw new Error("Fill in the 'email' and 'age' field");
            } else if(!name){
                throw new Error("Fill in the 'name' field");
            } else if(!email){
                throw new Error("Fill in the 'email' field");
            }
        }

        if( typeof name != "string" || typeof age != "number" || typeof email != "string"){
            throw new Error("'Name' and 'email' must be of type string and 'age' must be of type number");
        }

        const resultBusca = await connection.raw(`
            SELECT * FROM Users_ECommerce
        `)

        
        const listUsers: Array<UserT> = resultBusca[0]
        const indexOfName = listUsers.findIndex(person => person.name === name)
        const indexOfEmail = listUsers.findIndex(person => person.email === email)


        if(indexOfName !== -1  || indexOfEmail !== -1){
            if(indexOfName !== -1  && indexOfEmail !== -1){
                throw new Error("Name, email and already registered ");
            } else if(indexOfName !== -1){
                throw new Error("Name already registered ");
            } else if(indexOfEmail !== -1){
                throw new Error("Email already registered ");
            } 
        }

    
        const id = Date.now() + Math.random().toString()
        const user = new User(id, name, email, age)
        await insertUser(user)

        res.status(201).send({
            message: "User created successfully!",
            user
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}