import { NextFunction, Request, Response } from 'express';
import Employee from '../models/Employee';
import { IEmployee } from '../models/IEmployee';
import EmployeeService from '../services/Employee.service';

export default class EmployeesController {
  private clinicService: EmployeeService;

  constructor(clinicService: EmployeeService) {
    this.clinicService = clinicService;
  }

  public createEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const clinic = req.body as Employee;
      const result = await this.clinicService.create(clinic);
      res.status(201).json({ clinic: result });
    } catch (error) {
      next(error);
    }
  };

  public showEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const clinicId: number = parseInt(req.params.id, 10);
      const clinic: IEmployee | null = await this.clinicService.findById(clinicId);

      if (!clinic) {
        res.status(404).json({ message: 'Employee not found' });
      } else {
        res.status(200).json({ clinic });
      }
    } catch (error) {
      next(error);
    }
  };

  // public updateEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const clinicId: number = parseInt(req.params.id, 10);
  //     const clinic = req.body as Employee;
  //     const result = await this.clinicService.update(clinicId, clinic);
  //     res.status(200).json({ clinic: result });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const clinicId: number = parseInt(req.params.id, 10);
  //     await this.clinicService.delete(clinicId);
  //     res.status(204).send();
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
