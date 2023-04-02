export interface IUserBasicInformations {
  email: string;
  username: string;
  role: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export default interface IUser extends IUserCredentials {
  username: string;
  role: string;
}

// DTO - Data Transfer Object
export interface IUserDTO extends IUser {
  id?: number;
}