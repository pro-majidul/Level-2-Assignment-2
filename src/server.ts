import express, { Request, Response } from 'express'
import initDB from './config/db'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// database
initDB()

app.get("/", (req: Request, res: Response) => {
    res.send({
        status: true,
        message: 'server is running.........!'
    })
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})