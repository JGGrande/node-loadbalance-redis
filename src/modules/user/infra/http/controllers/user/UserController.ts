import { LoginUserService } from "@modules/user/application/services/user/LoginUserService";
import { userContainer } from "@modules/user/infra/di/user/container";
import { Request, Response } from "express";

export class UserController {

  async login(request: Request, response: Response): Promise<Response>{

    const { login, password } = request.body

    if(!login || !password) return response.status(400).json({ message: "User and password required"})


    const loginUserService = userContainer.resolve(LoginUserService);

    const user = await loginUserService.execute(login, password)

    return response.json(user)
  }
}