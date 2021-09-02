import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { User } from './entities/User';

const app: Express = express();
dotenv.config();
app.use(express.json());
app.use(cors());

//EXERCICIO 01
const user = new User("1", "vitoria@gmail.com", "Vitoria", "123456")
console.table({id: user.getId(), name: user.getName(), email: user.getEmail()})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});