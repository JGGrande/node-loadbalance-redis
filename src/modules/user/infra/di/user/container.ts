import { Container } from "inversify";
import { PrismaUserRepository } from "../../database/user/PrismaUserRepository";
import { type IUserRepository } from "@modules/user/domain/repositories/user/IUserRepository";

const userContainer = new Container()

userContainer.bind<IUserRepository>("UserRepository").to(PrismaUserRepository)

export { userContainer }