import express from 'express'
import { bookingController } from './booking.controller';

const router = express.Router()

router.post('/', bookingController.postBookings)


export const bookingsRouter = router;