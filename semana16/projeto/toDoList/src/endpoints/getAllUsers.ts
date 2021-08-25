import selectUserById from "../data/selectUserById"
import { Request, Response } from "express"
import moment from "moment";
import selectTaskById from "../data/selectTaskById";
import selectAllUsers from "../data/selectAllUsers";

export default async function getAllUsers(
    req: Request,
    res: Response
) {
    try {
        const result = await selectAllUsers()

        console.log("result chegando", result)
        if(!result){
            throw new Error("No user found");
        }

        res.status(200).send(
           result
        )
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
    
}