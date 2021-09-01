import {Client} from'./types'
import {analizeTodayDate} from './data'
import { clients } from './users'

export function refresh(client: Client): Client {
    client.statement.forEach((operation, i) => {
        if(!analizeTodayDate(new Date(operation.date))){
            if(operation.refresh){
                client.statement[i].refresh=false
                client.balance+=client.statement[i].value
            }
        }
    })  
    return client
}
