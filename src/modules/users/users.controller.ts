import { Request, Response } from "express"
import { userService } from "./users.service"

const getAllUsers = async (req: Request, res: Response) => {

    try {
        const result = await userService.getAllUsers();
        res.status(200).json({
            success: true,
            message: "Users retrived successfull",
            data: result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            details: error
        })
    }




}


const createUser = async (req: Request, res: Response) => {

    try {
        const result = await userService.createUser(req.body)

        res.status(201).json({
            success: false,
            message: "Data Instered Successfully",
            data: result.rows[0]
        });


    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            details: error,
        });
    }

}


const updateUser = async (req: Request, res: Response) => {
    const { name, email, password, Phone, role } = req.body;
    const { userId } = req.params
    try {

        const result = await userService.updateUser(name, email, password, Phone, role, userId as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: result.rows[0],
            });
        }

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            details: error,
        });
    }

}


export const userController = {
    createUser, getAllUsers, updateUser
}