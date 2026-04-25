import express, { Request, Response } from 'express'
import initDB from './config/db'
// import { userRoutes } from './modules/users/users.route'
import { vehiclesRoutes } from './modules/vehicles/vehicles.routes'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// database
initDB()

// app.use('/api/v1/users', userRoutes);
app.use('/api/v1/vehicles', vehiclesRoutes)

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})