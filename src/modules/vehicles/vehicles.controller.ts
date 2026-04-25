import { Request, Response } from "express";
import { vehicleServices } from "./vehicles.service";

const getAllVehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.getAllVehicles();
        res.status(201).json({
            success: false,
            message: "Data Instered Successfully",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const getSingleVehicles = async (req: Request, res: Response) => {
    console.log('getSingleVehicles')
}

const postVehicles = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const updateVehicles = async (req: Request, res: Response) => {
    console.log('updateVehicles')
}

const deleteVehicles = async (req: Request, res: Response) => {
    console.log('deleteVehicles')
}

export const vehiclesControllers = { getAllVehicles, postVehicles, getSingleVehicles, updateVehicles, deleteVehicles }