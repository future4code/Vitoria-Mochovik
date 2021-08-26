import selectUserById from "../data/selectUserById"
import { Request, Response } from "express"
import moment from "moment";
import selectTaskById from "../data/selectTaskById";
import selectUserByTask from "../data/selectUserByTask";
import selectTaskAndUserById from "../data/selectTaskAndUserById";

export default async function getTaskAndUserById(
    req: Request,
    res: Response
) {
    try {
        const resultsTask = await selectTaskAndUserById(req.params.id)
        
        if(!resultsTask){
            throw new Error("Task not found");
        }

        const resultsFormated = resultsTask.map((r:any )=> {
            return{
                ...r,
                deadline: moment(r.deadline, 'YYYY-MM-DD').format('DD/MM/YYYY')
            }
        })

        const resultUsers = await selectUserByTask(req.params.id)

        res.status(200).send({
            taskId: resultsTask[0].taskId,
            title: resultsTask[0].title,
            description: resultsTask[0].description,
            limitDate: moment(resultsTask[0].limitDate, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            creatorUserId: resultsTask[0].creatorUserId,
            creatorUserNickname: resultsTask[0].creatorUserNickname,
            responsibleUser: resultUsers
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
    
}