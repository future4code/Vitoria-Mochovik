import selectUserById from "../data/selectUserById"
import { Request, Response } from "express"
import moment from "moment";
import selectTaskById from "../data/selectTaskById";
import selectTaskByCreatorId from "../data/selectTaskByCreatorId";

export default async function getTaskById(
    req: Request,
    res: Response
) {
    try {
        const results = await selectTaskByCreatorId(req.params.id)
        
        if(!results){
            throw new Error("Task not found");
        }

        const resultsFormated = results.map((r:any )=> {
            return{
                ...r,
                deadline: moment(r.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY')
            }
        })

        res.status(200).send({
            message: "Task found!",
            results: resultsFormated
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
    
}