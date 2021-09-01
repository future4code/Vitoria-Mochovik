import selectUserById from "../data/selectUserById"
import { Request, Response } from "express"
import moment from "moment";
import selectTaskAndUserById from "../data/selectTaskAndUserById";

export default async function getTaskByStatus(
    req: Request,
    res: Response
) {
    try {
        const result = await selectTaskAndUserById(req.params.status, 'status')

        console.log("result", result)
        if(!result){
            throw new Error("Task not found");
        }

        const resultsFormated = result.map((r:any )=> {
            return{
                ...r,
                limitDate: moment(r.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY')
            }
        })

        res.status(200).send({
            tasks: resultsFormated
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
    
}