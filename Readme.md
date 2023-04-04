
# BACKEND - SHC Sistema Home Care

Repositório de Backend, do Sistema Online de Home Care, conectando familiares e cuidadores


![Alt text](img/logo.svg)

## Instalação e execução

Limpar containers

> docker container stop $(docker container list -qa) && docker system prune -a

Subir Container Backend
> dcup backend


## Prisma

Gerar migrates
> dce -it backend npx prisma migrate dev --name init

Gerar dump da base
> dce -it backend npx prisma db pull

Rodar migrates criadas
> dce -it backend npx prisma migrate dev