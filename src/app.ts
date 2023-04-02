import express from 'express';
import ErrorHandler from './middleware/ErrorHandler';
import userRouter from './routes/User.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use(ErrorHandler.handle);
export default app;