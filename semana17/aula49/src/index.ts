import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { getAllUsers } from './endpoints/getAllUsers'
import { getUsersByName } from './endpoints/getUsersByName'

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());


app.get("/users", getAllUsers)
app.get("/users/name", getUsersByName)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});