import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UserRepository from '../repository/User.repository';
import UserService from '../services/User.service';

const userRouter = Router();
const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UsersController(service);

userRouter.post('/', controller.createUser);
userRouter.get('/', controller.showUser);

export default userRouter;
