import { PrismaClient } from '@prisma/client';
import { json } from 'stream/consumers';


const prisma = new PrismaClient();

class SecretariaServices {
    constructor() {}

    async listarSecretaria() {
        try {
          const secretaria = await prisma.secretaria.findMany();
          return secretaria;
        } catch (error) {
          console.log(error);
        }
      }

    async criarSecretaria(newSecretaria: Secretaria) {
        try {
            const secretaria = await prisma.secretaria.create({
              data: newSecretaria,
            });
            return secretaria;
          } catch (error) {
            console.log(error);
          }
    }

    async atualizarSecretaria(Nome: string, RG: number) {
        try{
        const secretaria = await prisma.secretaria.update({
            where: { RG:RG },
            data: {Nome: Nome, RG: RG},
        });
        return secretaria
        } catch (error) {
            console.log(error);
        }
    }

    async deletarSecretaria(id: number) {
        try {
            const secretaria = await prisma.secretaria.delete({
                where: { id:id }
            });
            return console.log("Secretaria deletada");
        } catch(error){
            console.log(error);
        }
    }
}

export default new SecretariaServices();