import { PrismaClient } from '@prisma/client';
import { IUserBasicInformations, IUser } from '../models/IUser';

const prisma = new PrismaClient();

export default class UserRepository {
  public create = async (user: IUser): Promise<IUserBasicInformations> => {
    const newUser = await prisma.users.create({ data: user });

    return newUser;
  };
}
