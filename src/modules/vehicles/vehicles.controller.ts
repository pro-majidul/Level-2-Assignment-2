import { Request, Response } from "express";

const getAllVehicles = async (req: Request, res: Response) => {
    console.log('first')
}

export const vehiclesControllers = { getAllVehicles, }