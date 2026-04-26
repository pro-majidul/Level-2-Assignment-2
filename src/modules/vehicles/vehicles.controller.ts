import { Request, Response } from "express";
import { vehicleServices } from "./vehicles.service";
import { pool } from "../../config/db";

const getAllVehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.getAllVehicles();
        res.status(200).json({
            success: true,
            message: "Vehicles retrieved successfully",
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
    const { vehicleId } = req.params;
    try {
        const result = await pool.query(`SELECT * FROM vehicles WHERE id = $1`, [vehicleId as string])
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "Vehicles not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Vehicles fetched successfully",
                data: result.rows[0],
            });
        }

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }



}

const postVehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.postVehicles(req.body)
        // console.log(result)
        res.status(201).json({
            success: true,
            message: "Vehicles Data Instered Successfully",
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