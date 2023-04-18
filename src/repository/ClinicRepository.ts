import { PrismaClient } from '@prisma/client';
import { IClinicDTO, IClinic } from '../models/IClinic';

const prisma = new PrismaClient();

interface Repository {
  create(clinic: IClinicDTO): Promise<IClinicDTO>;
  findById(id: number): Promise<IClinicDTO | null>;
  findAll(): Promise<IClinicDTO[]>;
  update(id: number, data: IClinicDTO): Promise<IClinicDTO | null>;
  delete(id: number): Promise<IClinicDTO | null>;
}

export default class ClinicRepository implements Repository {
  async create(clinic: IClinic): Promise<IClinicDTO> {
    return await prisma.clinic.create({ data: clinic }) ?? null;
  }

  async findById(id: number): Promise<IClinicDTO | null> {
    return await prisma.clinic.findUnique({ where: { id } }) ?? null;
  }

  async findAll(): Promise<IClinicDTO[]> {
    return await prisma.clinic.findMany() ?? [];
  }

  async show(id: number): Promise<IClinicDTO[]> {
    return await prisma.clinic.findMany({ where: { id } }) ?? null;
  }

  async delete(id: number): Promise<IClinicDTO | null> {
    try {
      return await prisma.clinic.delete({ where: { id } }) ?? null;
    } catch (error) {
      console.error(`Failed to delete clinic with id ${id}: ${error}`);
      return null;
    }
  }

  async update(id: number, data: IClinic): Promise<IClinicDTO | null> {
    const updatedClinic = await prisma.clinic.update({ where: { id }, data });
    return updatedClinic ?? null;
  }
}
