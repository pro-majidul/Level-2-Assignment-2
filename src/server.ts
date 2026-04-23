import express, { Request, Response } from 'express'
import { Pool } from 'pg'

const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool = new Pool({
    connectionString: `postgresql://neondb_owner:npg_1VykE6eXGxrY@ep-fancy-surf-anzd1nc3-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`,
})

const initDB = async () => {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        age INT ,
        phone VARCHAR(15) NOT NULL,
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
    )`)
}

initDB()


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
