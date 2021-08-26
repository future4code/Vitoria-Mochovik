import selectUserById from "../data/selectUserById"
import { Request, Response } from "express"
import moment from "moment";
import selectTaskById from "../data/selectTaskById";
import selectUserByTask from "../data/selectUserByTask";

export default async function getUserByTask(
    req: Request,
    res: Response
) {
    try {
        const results = await selectUserByTask(req.params.id)
        
        if(!results){
            throw new Error("Task not found");
        }


        res.status(200).send({
            message: "Task found!",
            users: results
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
    
}