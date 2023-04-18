import Clinic from '../models/Clinic';
import { IClinicDTO } from '../models/IClinic';
import ClinicRepository from '../repository/ClinicRepository';

export default class ClinicService {
  constructor(private repository: ClinicRepository) {
    this.repository = repository;
  }

  public async all(): Promise<IClinicDTO[] | null> {
    return await this.repository.findAll() ?? [];
  }

  public async create(clinic: Clinic): Promise<IClinicDTO> {
    return await this.repository.create(clinic) ?? null;
  }

  public async findById(id: number): Promise<IClinicDTO | null> {
    return await this.repository.findById(id) ?? null;
  }
  
  public async update(id: number, clinic: Clinic): Promise<IClinicDTO | null> {
    return await this.repository.update(id, clinic) ?? null;
  }

  public async delete(id: number): Promise<IClinicDTO | null> {
    return await this.repository.delete(id) ?? null;
  }
}
