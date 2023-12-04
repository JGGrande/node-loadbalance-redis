import { inject, injectable } from "inversify";
import { type IUserRepository } from "../../../domain/repositories/user/IUserRepository";
import { User } from "../../../domain/models/user/User";
import AppError from "../../../../../shared/errors/AppError"

import crypto from "crypto"

@injectable()
export class LoginUserService {

  private userRepository: IUserRepository

  constructor(
    @inject("UserRepository") userReoisitory: IUserRepository
  ){
    this.userRepository = userReoisitory;
  }
  async execute(login: string, password: string): Promise<User>{

    const user = await this.userRepository.findByLogin(login);

    if(!user){
      throw new AppError("User or password invalid", 401);
    }

    const crypted = crypto.createHash('sha256')
    crypted.update(password)

    const passwordCrypted = crypted.digest('hex')

    if(user.password !== passwordCrypted){
      throw new AppError("User or password invalid")
    }

    return user

  }
}