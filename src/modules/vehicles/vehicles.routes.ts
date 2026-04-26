import express from 'express'
import { vehiclesControllers } from './vehicles.controller';

const router = express.Router()

router.get('/', vehiclesControllers.getAllVehicles)

router.get('/:vehicleId', vehiclesControllers.getSingleVehicles)

router.post('/', vehiclesControllers.postVehicles)

router.put('/:vehicleId', vehiclesControllers.postVehicles)

router.delete('/:vehicleId', vehiclesControllers.postVehicles)


export const vehiclesRoutes = router;