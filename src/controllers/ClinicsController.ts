import { NextFunction, Request, Response } from 'express';
import Clinic from '../models/Clinic';
import { IClinic } from '../models/IClinic';
import ClinicService from '../services/Clinic.service';

export default class ClinicsController {
  private clinicService: ClinicService;

  constructor(clinicService: ClinicService) {
    this.clinicService = clinicService;
  }

  public createClinic = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const clinic = req.body as Clinic;
      const result = await this.clinicService.create(clinic);
      res.status(201).json({ clinic: result });
    } catch (error) {
      next(error);
    }
  };

  public showClinic = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const clinicId: number = parseInt(req.params.id, 10);
      const clinic: IClinic | null = await this.clinicService.findById(clinicId);

      if (!clinic) {
        res.status(404).json({ message: 'Clinic not found' });
      } else {
        res.status(200).json({ clinic });
      }
    } catch (error) {
      next(error);
    }
  };

  // public updateClinic = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const clinicId: number = parseInt(req.params.id, 10);
  //     const clinic = req.body as Clinic;
  //     const result = await this.clinicService.update(clinicId, clinic);
  //     res.status(200).json({ clinic: result });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // public deleteClinic = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const clinicId: number = parseInt(req.params.id, 10);
  //     await this.clinicService.delete(clinicId);
  //     res.status(204).send();
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
