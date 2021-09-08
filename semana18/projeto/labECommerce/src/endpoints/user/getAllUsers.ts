import { Request, Response } from "express";

import UserDatabase from "../../data/user/UserDatabase";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        
        const users = await new UserDatabase().getAllUsers()
    
        res.status(201).send({
            users
        })

    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage);
    }
}