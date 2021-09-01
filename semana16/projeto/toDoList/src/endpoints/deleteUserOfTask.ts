import { Request, Response } from "express";
import updateUser from "../data/updateUser";
import { User, Task,Relation} from '../types';
import { connection } from "../data/functions/connection";
import validadeEmail from "../data/functions/validateEmail";
import deleteUserTask from "../data/deleteUserTask";
import assignTask from "../data/assignTask";


export default async function editUser(req: Request, res: Response){
    try {
        const {taskId, responsibleUserId} = req.params

        if(
            taskId === "" ||
            responsibleUserId === "" 
        ) {
            throw new Error("None of the fields can be empty");
        }
        
        console.log("task, ass", taskId, responsibleUserId)
        const resultBusca = await connection.raw(`
            SELECT * FROM to_do_list_tasks
        `)
        const resultBuscaUser = await connection.raw(`
            SELECT * FROM to_do_list_users
        `)
        const resultBuscaRelation = await connection.raw(`
            SELECT * FROM to_do_list_assignees
        `)

        const listTasks: Array<Task> = resultBusca[0]
        const indexOfIdTask = listTasks.findIndex(person => person.id === taskId)

        const listUsers: Array<User> = resultBuscaUser[0]
        console.log("users", listUsers[0].id)
        const indexOfUser = listUsers.findIndex(person => person.id === responsibleUserId)

        const listRelation: Array<Relation> = resultBuscaRelation[0]
        const indexOfRelation = listRelation.findIndex(person => person.task_id === taskId && person.assignee_id === responsibleUserId)
        
        console.log("user, task, relation", indexOfUser, indexOfIdTask, indexOfRelation)


        if(indexOfIdTask === -1  || indexOfUser === -1 || indexOfRelation === -1){
            if(indexOfIdTask === -1  && indexOfUser === -1 && indexOfRelation === -1){
                throw new Error("Task, User and Relationship not found ");
            } else if(indexOfIdTask === -1  && indexOfRelation  === -1){
                throw new Error("Task and Relationship not found ");
            } else if(indexOfUser === -1 && indexOfRelation === -1 ){
                throw new Error("User and Relationship not found ");
            } else if(indexOfRelation  === -1){
                throw new Error("Relation not found");
            } 
        }
        
        await deleteUserTask(
            taskId,
            responsibleUserId
        )

        res.status(200).send({
            message: "User delete succefully!",
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}