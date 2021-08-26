import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { connection } from './data/functions/connection';
import { User } from './types';
import validadeEmail from './data/functions/validateEmail';
import createUser from './endpoints/createUser';
import getUserById from './endpoints/getUserById';
import editUser from './endpoints/editUser';
import createTask from './endpoints/createTask';
import getTaskById from './endpoints/getTaskById';
import getAllUsers from './endpoints/getAllUsers';
import getTaskByCreatorId from './endpoints/getTaskByCreatorId'
import getUserBySearch from './endpoints/getUserBySearch'


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/user/all", getAllUsers)
app.put("/user/create", createUser)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", editUser)

app.put("/task", createTask)

app.get("/task/:id", getTaskById)

app.get("/task/searchCreator/:id", getTaskByCreatorId)


app.get("/task/search/:query", getUserBySearch)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});