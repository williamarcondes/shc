
# BACKEND - SHC Sistema Home Care

Repositório de Back, do Sistema Online de Home Care, conectando familiares e cuidadores


![Alt text](img/logo.svg)

## Instalação e execução

gerando node_modules primeira vez
> docker run -it -u $(id -u) -v $(pwd):/app node:19.8.1-bullseye bash
> cd app
> npm install

Popular o banco
> dce -it back npx prisma db push

Limpar containers

> docker container stop $(docker container list -qa) && docker system prune -a

Subir Container Back
> dcup back


## Prisma

Gerar migrates
> dce -it back npx prisma migrate dev --name init

Gerar dump da base
> dce -it back npx prisma db pull

Rodar migrates criadas
> dce -it back npx prisma migrate dev