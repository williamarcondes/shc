import app from './app';
import MySQLConnection from './utils/MySQLConnection';

try {
  MySQLConnection.getInstance();
  const { PORT, MYSQL_PORT } = process.env;

  app.listen(6060, () => {
    console.log(`Ouvindo a porta ${PORT}`);
  });

  console.log(`Database is ok ${MYSQL_PORT}`);
} catch (error) {
  console.log(error);
}
