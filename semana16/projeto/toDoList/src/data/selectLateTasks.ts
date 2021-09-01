import { Status } from "../types";
import { connection } from "./functions/connection";

export default async function selectLateTasks(
   
): Promise<any>{
    
    const result = await connection.raw(`
        SELECT tasks.id AS taskId, 
            tasks.title, tasks.description,
            tasks.deadline AS limitDate, tasks.author_id AS creatorUserId, 
            nickname AS creatorUserNickname 
        FROM to_do_list_tasks AS tasks
        JOIN to_do_list_users AS users
        ON author_id = users.id
        WHERE tasks.deadline < CURDATE() AND (tasks.status = "to_do" OR tasks.status = "doing");
    `)

    console.log("resul anteslate", result)
    return result[0]
}