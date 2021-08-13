import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { clients } from './users'

const app: Express = express();
app.use(express.json());
app.use(cors());





//CRIAR CONTA

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const { name, cpf, birth_dateString } = req.body

        const [day, month, year] = birth_dateString.split("/")
        const birth_date: Date = new Date(`${year}-${month}-${day}`)

        clients.push({
            name,
            cpf,
            birth_date,
            balance: 0,
            statement: []
        })
        res.status(201).send("Conta Criada com Sucesso!")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {

        if(!clients.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada!")
        }
        res.status(200).send(clients)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//PEGAR SALDO


//ADICIONAR SALDO

//PAGAR CONTA

//TRANSFERÊNCIA INTERNA

//
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});