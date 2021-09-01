import { Request, Response } from "express";
import assignTask from "../data/assignTask";
import { connection } from '../data/functions/connection';
import { Task, User } from '../types';

import updateTaskStatus from "../data/updateTaskStatus";

export default async function updateStatusTask(req: Request, res: Response) {
    try {

        const { status, task_id } = req.body
        
        
        if( !status || !task_id || status === '' || task_id === ""){
            throw new Error("'status' and 'task_id' are mandatory");
        }
        
        if(status !== "to_do" && status !== "doing" && status !== "done"){
            throw new Error("Use 'to_do', 'doing' or 'done'")
        }

        const resultBuscaTask = await connection.raw(`
            SELECT * FROM to_do_list_tasks
        `)
        

        const listTasks: Array<Task> = resultBuscaTask[0]
        const indexOfTasks = listTasks.findIndex(person => person.id === task_id)


        if(indexOfTasks === -1 ){
            throw new Error("'task_id' not found");
        }

        await updateTaskStatus(task_id, status)

        res.status(200).send({
            status
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}