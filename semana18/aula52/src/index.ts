import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex";
const app: Express = express();
import { UserAccount} from './entities/UserAccount'

app.use(express.json());
app.use(cors());

import { AddressInfo } from "net";
import dotenv from "dotenv";

dotenv.config();
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


//EXERCICIO 01

/*

1-A
   O construtor dentro de uma classe serve para inicializar campos que estão internamente na classe,
   além de alocar recursos que u7m objeto de classe possa precisar.
   Usamos o 'new nomeDoConstrutor'

1-B
   Foi chamado uma vez apenas.
*/

const newUser = new UserAccount("222.111.000-78", "Vitória", 21)

/*
1-C
   Fora do construtor por meio das propriedades 'get' e 'set', para visualizar e para atualizar, respectivamente.
   Ou dentro do construtor usando o 'this' na frente do nome.

*/