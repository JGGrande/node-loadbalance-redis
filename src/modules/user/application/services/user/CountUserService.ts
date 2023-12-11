import { type IUserRepository } from "@modules/user/domain/repositories/user/IUserRepository";
import { inject, injectable } from "inversify";

@injectable()
export class CountUserService {
  private userRepository: IUserRepository

  constructor(
    @inject("UserRepository") userReoisitory: IUserRepository
  ){
    this.userRepository = userReoisitory;
  }

  async execute(): Promise<number>{
    const userCount = await this.userRepository.count();
    return userCount
  }
}