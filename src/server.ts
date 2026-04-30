import express, { Request, Response } from 'express'
import initDB from './config/db'
import { userRoutes } from './modules/users/users.route'
import { vehiclesRoutes } from './modules/vehicles/vehicles.routes'
import config from './config'
import { bookingsRouter } from './modules/bookings/booking.route'

const app = express()
const port = config.port

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// database
initDB()

app.use('/api/v1/users', userRoutes);

app.use('/api/v1/vehicles', vehiclesRoutes)

app.use('/api/v1/bookings', bookingsRouter)

app.get('/', (req: Request, res: Response) => {
    console.log(`server is running on port${port}`)
    res.send(`server is running...`)
})
app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})