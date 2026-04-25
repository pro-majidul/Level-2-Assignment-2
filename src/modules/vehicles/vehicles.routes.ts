import express from 'express'
import { vehiclesControllers } from './vehicles.controller';

const router = express.Router()

router.get('/', vehiclesControllers.getAllVehicles)


export const vehiclesRoutes = router;