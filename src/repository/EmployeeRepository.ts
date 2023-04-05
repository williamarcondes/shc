import { PrismaClient } from '@prisma/client';
import { IEmployeeDTO, IEmployee } from '../models/IEmployee';

const prisma = new PrismaClient();

export default class EmployeeRepository {
  public create = async (employee: IEmployee): Promise<IEmployeeDTO> => {
    const newEmployee = await prisma.employee.create({ data: employee });

    return newEmployee;
  };

  public findById = async (employeeId: number): Promise<IEmployeeDTO | null> => {
    const employee = await prisma.employee.findUnique({ where: { id: employeeId } });
    return employee ?? null;
  };
}