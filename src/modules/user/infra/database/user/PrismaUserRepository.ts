import { User } from "@modules/user/domain/models/user/User";
import { IUserRepository } from "@modules/user/domain/repositories/user/IUserRepository";
import { PrismaClient } from "@prisma/client";
import prisma from "@shared/infra/database/PrismaClient";
import { injectable } from "inversify";

@injectable()
export class PrismaUserRepository implements IUserRepository {

  private prisma: PrismaClient

  constructor(){
    this.prisma = prisma
  }

  async findByLogin(login: string): Promise<User | null> {
    const userData = await this.prisma.user.findFirst({
      where: {
        login
      }
    })

    if(!userData) {
      return null
    }

    const user = new User({
      id: userData.id,
      login: userData.login,
      name: userData.name,
      password: userData.password
    })

    return user;
  }

}