import { Request, Response } from "express";
import User from "../entities/User"
import { findBodyDontHave } from "../functions/findBodyDontHave";

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, age} = req.body

        // if(!name || !email || !age) {
        //     if(!name && !email && !age){
        //         throw new Error("Fill all fields");
        //     } else if(!name && !email){
        //         throw new Error("Fill in the 'name' and 'email' field");
        //     } else if(!name && !age){
        //         throw new Error("Fill in the 'name' and 'age' field");
        //     } else if(!email && !age){
        //         throw new Error("Fill in the 'email' and 'age' field");
        //     } else if(!name){
        //         throw new Error("Fill in the 'name' field");
        //     } else if(!email){
        //         throw new Error("Fill in the 'email' field");
        //     }
        // }

        const bodyDontHave = findBodyDontHave([name, email, age])
        if(bodyDontHave.length > 0){
            throw new Error(`Fill in the ${bodyDontHave} field`)
        } 

        const id = Date.now() + Math.random().toString()
        const user = new User(id, name, email, age)

        res.status(201).send({
            message: "User created successfully!",
            user
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}