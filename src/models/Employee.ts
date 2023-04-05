import { IEmployeeDTO } from './IEmployee';

export default class Employee implements IEmployeeDTO {
  public readonly id: number;
  public name: string;
  public clinicId: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.clinicId = 0;
  }
}
