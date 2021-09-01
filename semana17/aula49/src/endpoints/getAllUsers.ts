import selectAllUsers from "../data/selectAllUsers"
import { Request, Response } from "express"

export const getAllUsers = async( req: Request,res: Response): Promise<void> =>{
    try {
        
        
        const users = await selectAllUsers()
 
        if(!users.length){
            res.statusCode = 404
            throw new Error("No recipes found")
        }
 
        res.status(200).send(users)
       
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send("Unexpected Error")
         } else {
            res.send(error.message || error.sqlMessage)
         }
      
    }
 }