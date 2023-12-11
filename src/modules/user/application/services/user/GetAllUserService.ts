import { User } from "@modules/user/domain/models/user/User";
import { type IUserRepository } from "@modules/user/domain/repositories/user/IUserRepository";
import { inject, injectable } from "inversify";

@injectable()
export class GetAllUserService{

  private userRepository: IUserRepository

  constructor(
    @inject("UserRepository") userReoisitory: IUserRepository
  ){
    this.userRepository = userReoisitory;
  }

  async execute(): Promise<User[]>{
    const users = await this.userRepository.getAll();
    return users
  }
}