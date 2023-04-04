import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UserService from '../services/User.service';
import UserRepository from '../repository/User.repository';

const userRouter = Router();
const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UsersController(service);

userRouter.post('/', controller.createUser);
userRouter.get('/:id', controller.showUser);

export default userRouter;
