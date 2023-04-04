import { PrismaClient } from '@prisma/client';
import { IUserBasicInformations, IUser } from '../models/IUser';

const prisma = new PrismaClient();

export default class UserRepository {
  public create = async (user: IUser): Promise<IUserBasicInformations> => {
    const newUser = await prisma.user.create({ data: user });

    return newUser;
  };

  public findById = async (userId: number): Promise<IUserBasicInformations | null> => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return user ?? null;
  }
}
