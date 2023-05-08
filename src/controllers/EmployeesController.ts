import { NextFunction, Request, Response } from 'express';
import Employee from '../models/Employee';
import { IEmployee } from '../models/IEmployee';
import EmployeeService from '../services/Employee.service';

export default class EmployeesController {
  private employeService: EmployeeService;

  constructor(employeService: EmployeeService) {
    this.employeService = employeService;
  }

  public indexEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const clinicId: number = req.query.clinicId ? parseInt(req.query.clinicId as string, 10) : 0;

      const employees: IEmployee[] | null = await this.employeService.all(clinicId);

      if (!employees) {
        res.status(404).json({ message: 'Não possui clínicas cadastradas.' });
      } else {
        res.status(200).json({ employees });
      }
    } catch (error) {
      next(error);
    }
  };

  public createEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const employe = req.body as Employee;
      const result = await this.employeService.create(employe);
      res.status(201).json({ employe: result });
    } catch (error) {
      next(error);
    }
  };

  public showEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const employeId: number = parseInt(req.params.id, 10);
      const employe: IEmployee | null = await this.employeService.findById(employeId);

      if (!employe) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.status(200).json({ employe });
      }
    } catch (error) {
      next(error);
    }
  };

  // public updateEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const employeId: number = parseInt(req.params.id, 10);
  //     const employe = req.body as Employee;
  //     const result = await this.employeService.update(employeId, employe);
  //     res.status(200).json({ employe: result });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const employeId: number = parseInt(req.params.id, 10);
  //     await this.employeService.delete(employeId);
  //     res.status(204).send();
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
