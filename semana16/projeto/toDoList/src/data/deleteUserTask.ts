import { Status } from "../types";
import { connection } from "./functions/connection";

export default async function deleteUserTask(
    task_id: string,
    assignee_id: string,
) {
    
    await connection.raw(`
        DELETE FROM to_do_list_assignees
        WHERE task_id = "${task_id}" 
        AND assignee_id = "${assignee_id}"
    `)

}