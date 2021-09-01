import { connection } from "./functions/connection";

export default async function assignTask(
    task_id:string,
    assignee_id: string
) {
    
    await connection('to_do_list_assignees')
    .insert({
        task_id,
        assignee_id
    })
    
}