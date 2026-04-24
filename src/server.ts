import express, { Request, Response } from 'express'
import { Pool } from 'pg'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool = new Pool({
    connectionString: `${process.env.CONNECTION_STRING}`,
})

const initDB = async () => {
    await pool.query(`CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL CHECK (LENGTH(password) >= 6),
        phone VARCHAR(20) NOT NULL,
        role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'customer'))
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(255) NOT NULL,
        type VARCHAR(10) NOT NULL CHECK (type IN ('car', 'bike', 'van', 'SUV')),
        registration_number VARCHAR(255) UNIQUE NOT NULL,
        daily_rent_price NUMERIC(10,2) NOT NULL CHECK(daily_rent_price > 0),
        availability_status VARCHAR(50) NOT NULL CHECK(availability_status IN ('available', 'booked'))
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS bookings(
        id SERIAL PRIMARY KEY,
        customer_id INT NOT NULL REFERENCES users(id),
        vehicle_id INT NOT NULL REFERENCES vehicles(id),
        rent_start_date DATE NOT NULL,
        rent_end_date DATE NOT NULL CHECK (rent_end_date > rent_start_date),
        total_price NUMERIC(10,2) NOT NULL CHECK (total_price > 0),
        status VARCHAR(50) NOT NULL CHECK (status IN ('active','cancelled','returned'))
    )`);
}


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