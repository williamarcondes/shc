import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import UserService from '../services/User.service';

export default class UsersController {
  constructor(private userService: UserService) { }

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    console.log('ossk');
    try {
      const user = req.body as User;
      const result = await this.userService.create(user);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  };

  public showUser() {
    console.log('entrei');
  }
}