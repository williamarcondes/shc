export default class Clinic {
  id: number;
  name: string;
  city: string;
  street: string;
  number: number;
  uf: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.city = '';
    this.street = '';
    this.number = 0;
    this.uf = '';
  }
}