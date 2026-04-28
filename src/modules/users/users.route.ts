import express from "express";
import { userController } from "./users.controller";

const router = express.Router()

router.get('/', userController.getAllUsers)

router.put('/:userId', userController.updateUser)

router.post('/', userController.createUser)

router.delete('/:userId', userController.deleteUser)

export const userRoutes = router;