import express, { Express, Request, Response} from 'express'
import cors from 'cors'
import { countries } from './data'
import { country } from './types'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get('/countries', (req: Request, res: Response) => {
    const result = countries.map((country: country) => {
        return { id: country.id, name: country.name}
    })
    res.status(200).send(result)
})

app.listen(3003, () => {
    console.log("Servidor pronto!")
 })