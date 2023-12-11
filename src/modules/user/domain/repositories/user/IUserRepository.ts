import { type ICreateUserDTO } from "@modules/user/application/dtos/user/ICreateUserDTO";
import { User } from "../../models/user/User";

export interface IUserRepository {
  findByLogin(login: string): Promise<User | null>;
  create({}:ICreateUserDTO): Promise<User>;
  getAll(): Promise<User[]>
}