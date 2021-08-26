import selectUserById from "../data/selectUserById"
import { Request, Response } from "express"
import moment from "moment";
import selectLateTasks from "../data/selectLateTasks";

export default async function getAllLateTasks(
    req: Request,
    res: Response
) {
    try {
        const result = await selectLateTasks()

        console.log("result lateee", result)
        if(!result){
            throw new Error("Task not found");
        }

        const resultsFormated = result.map((r:any )=> {
            return{
                ...r,
                limitDate: moment(r.limitDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
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