import { inject, injectable } from "inversify";
import crypto from "crypto"
import { type IUserRepository } from "@modules/user/domain/repositories/user/IUserRepository";

interface IRequest{
  login: string;
  name: string;
  password: string;
}

@injectable()
export class CreateUserService {

  private userRepository: IUserRepository

  constructor(
    @inject("UserRepository") userReoisitory: IUserRepository
  ){
    this.userRepository = userReoisitory;
  }

  async execute({ login, name, password }:IRequest){

    const crypted = crypto.createHash('sha256')
    crypted.update(password)

    const passwordCrypted = crypted.digest('hex')

    const user = await this.userRepository.create({
      login,
      name,
      password: passwordCrypted
    })

    return user;
  }

}