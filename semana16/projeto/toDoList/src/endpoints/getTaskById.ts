import selectUserById from "../data/selectUserById"
import { Request, Response } from "express"
import moment from "moment";
import selectTaskById from "../data/selectTaskById";

export default async function getTaskById(
    req: Request,
    res: Response
) {
    try {
        const result = await selectTaskById(req.params.id)

        console.log("result", result)
        if(!result){
            throw new Error("Task not found");
        }

        res.status(200).send({
            message: "Task found!",
            id: result.id,
            title: result.title,
            description: result.description,
            deadline: moment(result.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            status: result.status,
            authorId: result.author_id,
            authorNickname: result.nickname
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
    
}