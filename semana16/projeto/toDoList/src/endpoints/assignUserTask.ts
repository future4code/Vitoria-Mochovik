import { Request, Response } from "express";
import assignTask from "../data/assignTask";
import { connection } from '../data/functions/connection';
import { User } from '../types';

import selectUserBySearch from "../data/selectUserBySearch";

export default async function assigneUserTask(req: Request, res: Response) {
    try {

        const { task_id, assignee_id} = req.body
        
        
        if( !task_id || !assignee_id ){
            throw new Error("'assignee_id', 'task_id' are mandatory");
        }
        
        const resultBuscaUser = await connection.raw(`
            SELECT * FROM to_do_list_users
        `)

        const resultBuscaTask = await connection.raw(`
            SELECT * FROM to_do_list_tasks
        `)
        
        const listUsers: Array<User> = resultBuscaUser[0]
        const indexOfUserId = listUsers.findIndex(person => person.id === assignee_id)

        const listTasks: Array<User> = resultBuscaTask[0]
        const indexOfTasks = listTasks.findIndex(person => person.id === task_id)


        if(indexOfUserId === -1  || indexOfTasks === -1 ){
            if(indexOfUserId === -1  && indexOfTasks === -1){
                throw new Error("'assignee_id' and 'task_id' not found");
            } else if (indexOfUserId === -1) {
                throw new Error("'assignee_id' not found");
            } else if (indexOfTasks === -1) {
                throw new Error("'task_id' not found");
            }
        }

        await assignTask(task_id, assignee_id)
        res.status(200).send({
            message: "Success! Assignments done!",
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}