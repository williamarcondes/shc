import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import UserService from '../services/User.service';
import { IUserBasicInformations } from '../models/IUser';

export default class UsersController {
  private userService: UserService;

  constructor(userService: UserService) {
    console.log('declarous');
    this.userService = userService;
  }

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = req.body as User;
      const result = await this.userService.create(user);
      res.status(201).json({ user: result });
    } catch (error) {
      next(error);
    }
  }

  public showUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId: number = parseInt(req.params.id, 10);
      const user: IUserBasicInformations | null = await this.userService.findById(userId);

      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json({ user });
      }
    } catch (error) {
      next(error);
    }
  }
}
