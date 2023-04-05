export interface IClinic {
  name: string;
  city: string;
  street: string;
  number: number;
  uf: string;
}

export interface IClinicDTO extends IClinic {
  id?: number;
}