
export type User = {
    id : string
    name : string,
    nickname : string,
    email : string
  }
  
  export type Task = {
    id : string,
    title : string
    description : string,
    deadline : string,
    author_id : string,
    status : Status,

  }
  
  export enum Status {
    TO_DO = 'to do',
    DOING = 'doing',
    DONE = 'done'
  }

  export type Relation = {
    task_id: string,
    assignee_id: string
  }