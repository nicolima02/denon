import express from "npm:express"
import {Memoria} from "../controller/memory.ts"
const memoria = new Memoria 

const app: Express = express()

app.use(express.json())

app.get('/', async (req: Request,res: Response) =>{
    const contenido = await memoria.getAll()   
    res.json(JSON.parse(contenido))
})

app.post('/', async (req:Request, res: Response)=>{
    const color = req.body.color
    memoria.save(color)
    res.send(color)
})


app.listen({port: 8080})
// const cont = await memoria.getAll()
// console.log(cont);

// memoria.save("verde")