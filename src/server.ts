import app from './app';
import MySQLConnection from './utils/MySQLConnection';

try {
  MySQLConnection.getInstance();
  const { MYSQL_PORT } = process.env;

  app.listen(6060, () => {
    console.log(`Ouvindo a porta ${MYSQL_PORT}`);
  });

  console.log('Database is ok');
} catch (error) {
  console.log(error);
}
