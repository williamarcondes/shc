import express from 'express';
import ErrorHandler from './middleware/ErrorHandler';
import userRouter from './routes/User.routes';
import clinicRouter from './routes/Clinic.routes';
import employeeRouter from './routes/Employee.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/clinics', clinicRouter);
app.use('/employees', employeeRouter);

app.use(ErrorHandler.handle);
export default app;