import selectUsersByName from "../data/selectUsersByName"
import { Request, Response } from "express"

export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
        
        const name = req.query.name

        if(typeof name !== "string"){
            throw new Error("Expected string");
        }


        const users = await selectUsersByName(name)
 
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