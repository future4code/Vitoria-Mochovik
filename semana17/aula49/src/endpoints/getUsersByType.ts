import selectUsersByType from "../data/selectUsersByType"
import { Request, Response } from "express"

export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
    try {
        
        const type = req.params.type

        if(typeof type !== "string"){
            throw new Error("Expected string");
        }


        const users = await selectUsersByType(type)
 
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