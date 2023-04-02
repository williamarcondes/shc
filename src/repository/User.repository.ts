import { IUserBasicInformations, IUserDTO } from '../models/IUser';
import MySQLConnection from '../utils/MySQLConnection';

export default class UserRepository {
  private persistence: MySQLConnection;

  constructor() {
    this.persistence = MySQLConnection.getInstance();
  }

  public create = async (user: IUserDTO): Promise<IUserBasicInformations> => {
    const { username, email, password, role } = user;
    const values = [username, email, password, role];

    const query = 'INSERT INTO '
      + 'solid_example.users(username, email, password, role) '
      + 'VALUES (?,?,?,?)';

    const result = await this.persistence.query(query, values);

    const newUser: IUserDTO = {
      id: result.insertId, username, email, password, role,
    };

    return newUser;
  };
}