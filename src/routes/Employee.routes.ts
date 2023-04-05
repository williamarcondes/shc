import { Router } from 'express';
import EmployeeController from '../controllers/EmployeesController';
import EmployeeRepository from '../repository/EmployeeRepository';
import EmployeeService from '../services/Employee.service';

const employeeRouter = Router();

const repository = new EmployeeRepository();
const service = new EmployeeService(repository);
const controller = new EmployeeController(service);

employeeRouter.post('/', controller.createEmployee);
employeeRouter.get('/:id', controller.showEmployee);
// employeeRouter.put('/:id', controller.updateEmployee);
// employeeRouter.delete('/:id', controller.deleteEmployee);

export default employeeRouter;