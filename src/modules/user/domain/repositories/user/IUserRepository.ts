import { User } from "../../models/user/User";

export interface IUserRepository {
  findByLogin(login: string): Promise<User | null>;
}