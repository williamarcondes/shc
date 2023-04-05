import { PrismaClient } from '@prisma/client';
import { IClinicDTO, IClinic } from '../models/IClinic';

const prisma = new PrismaClient();

export default class ClinicRepository {
  public create = async (clinic: IClinic): Promise<IClinicDTO> => {
    const newClinic = await prisma.clinic.create({ data: clinic });

    return newClinic;
  };

  public findById = async (clinicId: number): Promise<IClinicDTO | null> => {
    const clinic = await prisma.clinic.findUnique({ where: { id: clinicId } });
    return clinic ?? null;
  };
}