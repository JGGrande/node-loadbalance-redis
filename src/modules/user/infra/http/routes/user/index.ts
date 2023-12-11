import { Router } from "express";
import { UserController } from "../../controllers/user/UserController";

const userRoutes = Router()
const userController = new UserController();

userRoutes.post('/', userController.create);
userRoutes.post('/auth/', userController.login);

export { userRoutes}