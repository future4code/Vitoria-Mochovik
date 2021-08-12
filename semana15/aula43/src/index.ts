import express, { Express, Request, Response} from 'express'
import cors from 'cors'
import { countries } from './data'
import { country } from './types'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor pronto!")
})

//EXERCICIO 01

app.get('/countries', (req: Request, res: Response) => {
    const result = countries.map((country: country) => {
        return { id: country.id, name: country.name}
    })
    res.status(200).send(result)
})

//EXERCICIO 02

app.get('/countries/:id', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const result: country | undefined = countries.find(
            country => country.id ===Number(req.params.id)
        )  
        if(!result) {
            errorCode = 404;
            throw new Error();
        }
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
    
})
