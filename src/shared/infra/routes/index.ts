import { userRoutes } from "@modules/user/infra/http/routes/user";
import { Router } from "express";

const routes = Router()

routes.use('/user', userRoutes)

export { routes }