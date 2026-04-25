import { Request, Response } from "express";
import { vehicleServices } from "./vehicles.service";
import { pool } from "../../config/db";

const getAllVehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.getAllVehicles();
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            datails: error,
        })
    }
}

const getSingleVehicles = async (req: Request, res: Response) => {
    console.log('getSingleVehicles')
}

const postVehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.postVehicles(req.body)
        res.status(201).json({
            success: true,
            message: "Data Instered Successfully",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            datails: error,
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