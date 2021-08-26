import { connection } from "./functions/connection";

export default async function selectTaskAndUserById(
    id: string
): Promise<any>{
    // const result = await connection.raw(`
    //     SELECT tasks.id as taskId, tasks.title, tasks.description,
    //     tasks.deadline as limitDate, tasks.author_id as creatorUserId, nickname as creatorUserNickname,
    //     tasks.author_id as id, nickname
    //     FROM to_do_list_tasks AS tasks 
    //         JOIN to_do_list_users AS users
    //         ON author_id = users.id
    //         JOIN to_do_list_assignees AS responsibleUsers
    //         ON tasks.id = responsibleUsers.task_id 
    //         WHERE tasks.id = ${id};
        
    // `)

    const result = await connection.raw(`
    SELECT tasks.id as taskId, tasks.title, tasks.description,
         tasks.deadline as limitDate, tasks.author_id as creatorUserId, nickname as creatorUserNickname 
         FROM to_do_list_tasks AS tasks
    JOIN to_do_list_users AS users
    ON author_id = users.id
    WHERE tasks.id = ${id};
    `)

    console.log("resul antes", result)
    return result[0]
}