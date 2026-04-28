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
            error: error
        })
    }




}


const createUser = async (req: Request, res: Response) => {

}

export const userController = {
    createUser, getAllUsers
}