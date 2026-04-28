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

export const userController = {
    createUser, getAllUsers
}