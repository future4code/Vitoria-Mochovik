import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import moment from "moment";
import insertTask from "../data/insertTask";
import {Task, User} from '../types'
import { connection } from '../data/functions/connection';


export default async function createTask(req: Request, res: Response) {
    try {
        const { title, description, deadline, author_id} = req.body
        
        if( !title || !description || !deadline || !author_id){
            throw new Error("'title', 'description', 'deadline' and 'authorId' are mandatory");
        }
        
        const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()

        // if(dateDiff <= 0){
        //     throw new Error("'deadline' need to be a future date");
            
        // }

        const resultBusca = await connection.raw(`
        SELECT * FROM to_do_list_tasks
    `)
        const listUsers: Array<Task> = resultBusca[0]
        const indexOfName = listUsers.findIndex(task => task.title === title && task.author_id === author_id
            && task.description === description && task.deadline === moment(deadline, 'DD/MM/YYY').format('YYYY-MM-DD'))
        
        if(indexOfName !== -1 ){
            throw new Error("A task with the same title, description and due date has already been created.");
        }

        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            title,
            description,
            moment(deadline, 'DD/MM/YYY').format('YYYY-MM-DD'),
            author_id
        )

        res.status(200).send({
            message: "task created successfully",
            id
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}