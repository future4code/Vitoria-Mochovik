import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
const app: Express = express();
import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
app.use(cors());

import { AddressInfo } from "net";
import { createUser } from './endpoints/user/createUser';
import { createProduct } from './endpoints/product/createProduct';
import { getAllUsers } from './endpoints/user/getAllUsers';
import { getAllProducts } from './endpoints/product/getAllProducts';


app.post("/create/user", createUser)
app.post("/create/product", createProduct)

app.get("/products", getAllProducts)

app.get("/users", getAllUsers)
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});