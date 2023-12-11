import { CountUserService } from "@modules/user/application/services/user/CountUserService";
import { CreateUserService } from "@modules/user/application/services/user/CreateUserService";
import { GetAllUserService } from "@modules/user/application/services/user/GetAllUserService";
import { LoginUserService } from "@modules/user/application/services/user/LoginUserService";
import { userContainer } from "@modules/user/infra/di/user/container";
import { Request, Response } from "express";

export class UserController {

  public async create(request: Request, response: Response): Promise<Response>{
    const { name, login, password } = request.body

    if(!name || !login || !password) return response.status(400).json({ message: "Fill in all fields."})

    if(name.length < 1 || name.length > 100) return response.status(400).json({ message: "Name can contain up to 100 characters." });

    if(login.length < 1 || login.length > 100) return response.status(400).json({ message: "Login can contain up to 100 characters." });

    if(password.length < 1 || password.length > 100) return response.status(400).json({ message: "Password can contain up to 100 characters." });


    const createUserService = userContainer.resolve(CreateUserService)

    const user = await createUserService.execute({ name, login, password})

    return response.json(user)

  }

  public async login(request: Request, response: Response): Promise<Response>{

    const { login, password } = request.body

    if(!login || !password) return response.status(400).json({ message: "User and password required"})


    const loginUserService = userContainer.resolve(LoginUserService);

    const user = await loginUserService.execute(login, password)

    return response.json(user)
  }
  public async getAll(request: Request, response: Response): Promise<Response>{
    const getAllUserService = userContainer.resolve(GetAllUserService)

    const users = await getAllUserService.execute();

    return response.json(users);
  }

  public async count(request: Request, response: Response): Promise<Response>{

    const countUserService = userContainer.resolve(CountUserService)

    const countUser = await countUserService.execute();

    return response.json({ users: countUser});
  }

}