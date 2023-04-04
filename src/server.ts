import { PrismaClient } from '@prisma/client';
import app from './app';

const prisma = new PrismaClient();

try {
  const { PORT } = process.env;

  (async () => {
    console.log('Conexão estabelecida com sucesso!');
  })();

  app.listen(6060, async () => {
    await prisma.$connect();
    console.log(`Ouvindo a porta ${PORT}`);
  });
} catch (error) {
  console.log(error);
} finally {
  (async () => {
    await prisma.$disconnect();
  })();
}
