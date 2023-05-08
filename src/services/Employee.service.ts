import Employee from '../models/Employee';
import { IEmployeeDTO } from '../models/IEmployee';
import EmployeeRepository from '../repository/EmployeeRepository';

export default class EmployeeService {
  constructor(private repository: EmployeeRepository) {
    this.repository = repository;
  }

  public async all(clinicId: number): Promise<IEmployeeDTO[] | null> {
    return await this.repository.findAll(clinicId) ?? [];
  }

  public async create(employee: Employee): Promise<IEmployeeDTO> {
    const result = await this.repository.create(employee);
    return result;
  }

  public async findById(employeeId: number): Promise<IEmployeeDTO | null> {
    const employee = await this.repository.findById(employeeId);
    return employee ?? null;
  }

  // public async update(employeeId: number, employee: Employee): Promise<Employee | null> {
  //   const result = await this.repository.update(employeeId, employee);
  //   return result;
  // }

  // public async delete(employeeId: number): Promise<boolean> {
  //   const result = await this.repository.delete(employeeId);
  //   return result;
  // }
}
