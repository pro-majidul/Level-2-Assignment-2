import express from 'express'
import { vehiclesControllers } from './vehicles.controller';

const router = express.Router()

router.get('/', vehiclesControllers.getAllVehicles)

router.get('/:vehicleId', vehiclesControllers.getSingleVehicles)

router.post('/', vehiclesControllers.postVehicles)

router.put('/:vehicleId', vehiclesControllers.updateVehicles)

router.delete('/:vehicleId', vehiclesControllers.deleteVehicles)


export const vehiclesRoutes = router;