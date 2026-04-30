import { Request, Response } from "express";
import { bookingService } from "./booking.service";

const postBookings = async (req: Request, res: Response) => {
    const result = await bookingService.postBookings(req.body)
}

export const bookingController = { postBookings }