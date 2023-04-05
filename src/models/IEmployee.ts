import { IClinicDTO } from './IClinic';

export interface IEmployee {
  id?: number;
  name: string;
  clinicId: number;
}

export interface IEmployeeDTO extends IEmployee {
  clinic?: IClinicDTO;
}
