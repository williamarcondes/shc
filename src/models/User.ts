import { IUserDTO } from './IUser';

export default class User implements IUserDTO {
  public readonly id: number;
  public username: string;
  public email: string;
  public password: string;
  public role: string;

  constructor() {
    this.id = 0;
    this.username = '';
    this.email = '';
    this.password = '';
    this.role = '';
  }
}