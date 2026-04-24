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
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(15) NOT NULL,
        role VARCHAR(50) NOT NULL CHECK (role IN ('admin', 'user')),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    )`);

    await pool.query(`CREATE TABLE IF NOT EXISTS vehicles (
    id SERIAL PRIMARY KEY,
    vehicle_name VARCHAR(255) NOT NULL,
    type VARCHAR(10) CHECK (type IN ('car', 'bike', 'van', 'SUV')) NOT NULL,
    registration_number VARCHAR(100) UNIQUE NOT NULL,
    daily_rent_price DECIMAL(10, 2) NOT NULL CHECK (daily_rent_price > 0),
    availability_status VARCHAR(10) CHECK (availability_status IN ('available', 'booked')) NOT NULL DEFAULT 'available'
    )`);


    await pool.query(`CREATE TABLE IF NOT EXISTS bookings(
        id SERIAL PRIMARY KEY,
        customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        vehicle_id INTEGER REFERENCES vehicles(id) ON DELETE CASCADE,
        rent_start_date DATE NOT NULL,
        rent_end_date DATE NOT NULL,
        total_price DECIMAL(10, 2) NOT NULL CHECK (total_price >= 0),
        status VARCHAR(10) CHECK (status IN ('active', 'cancelled', 'returned')) NOT NULL DEFAULT 'active',
        CONSTRAINT valid_dates CHECK (rent_end_date >= rent_start_date)
        )`)

}

initDB()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
