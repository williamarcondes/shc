import mysql from 'mysql2/promise';

class MySQLConnection {
  private static instance: MySQLConnection;
  private connectionPool: mysql.Pool;

  private constructor() {
    this.connectionPool = mysql.createPool({
      host: 'mysqldb',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_ROOT_PASSWORD || 'password',
      database: 'shc',
    });
  }

  public static getInstance(): MySQLConnection {
    if (!MySQLConnection.instance) {
      MySQLConnection.instance = new MySQLConnection();
    }
    return MySQLConnection.instance;
  }

  public async query(sql: string, values?: any): Promise<any> {
    const connection = await this.connectionPool.getConnection();
    try {
      const [rows] = await connection.query(sql, values);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      connection.release();
    }
  }
}

export default MySQLConnection;
