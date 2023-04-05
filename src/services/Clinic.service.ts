import Clinic from '../models/Clinic';
import { IClinicDTO } from '../models/IClinic';
import ClinicRepository from '../repository/ClinicRepository';

export default class ClinicService {
  constructor(private repository: ClinicRepository) {
    this.repository = repository;
  }

  public async create(clinic: Clinic): Promise<IClinicDTO> {
    const result = await this.repository.create(clinic);
    return result;
  }

  public async findById(clinicId: number): Promise<IClinicDTO | null> {
    const clinic = await this.repository.findById(clinicId);
    return clinic ?? null;
  }

  // public async update(clinicId: number, clinic: Clinic): Promise<Clinic | null> {
  //   const result = await this.repository.update(clinicId, clinic);
  //   return result;
  // }

  // public async delete(clinicId: number): Promise<boolean> {
  //   const result = await this.repository.delete(clinicId);
  //   return result;
  // }
}
