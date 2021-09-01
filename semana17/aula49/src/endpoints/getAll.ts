import selectUsersByName from "../data/selectUsersByName"
import { Request, Response } from "express"

export const getAll = async(req: Request,res: Response): Promise<void> =>{
    try {
        

        const name = req.query.name || "%"
        const type = req.query.type || "%"
        const order = req.query.order || "asc"
        const sort = req.query.sort || "email"
        const page = Number(req.query.page) || 1
        const size = Number(req.query.size) || 5

        if(sort !== "name" && sort !== "email"){
            res.statusCode = 422
            throw new Error("Expected 'name' or 'email'!!!");
        }

        if(order !== "asc" && order !== "desc") {
            res.statusCode = 422
            throw new Error("Expected 'asc' or 'desc'!!!");
        }

        if(typeof name !== "string"){
            throw new Error("Expected string in value of 'name'");
        }

        if(typeof type !== "string"){
            throw new Error("Expected string in value of 'type'");
        }


        const offset = size * (page - 1)

        const users = await selectUsersByName(name, type, sort, order, size, offset)
 
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