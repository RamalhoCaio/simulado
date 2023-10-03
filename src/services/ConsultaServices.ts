import { PrismaClient } from '@prisma/client';
import { json } from 'stream/consumers';


const prisma = new PrismaClient();

class ConsultaServices {
    constructor() {}

    async listarConsulta() {
        try {
          const consulta = await prisma.consulta.findMany();
          return consulta;
        } catch (error) {
          console.log(error);
        }
      }

    async criarConsulta(newConsulta: Consulta) {
        try {
            const consulta = await prisma.consulta.create({
              data: newConsulta,
            });
            return consulta;
          } catch (error) {
            console.log(error);
          }
    }

    async atualizarConsulta(Nome: string, RG: number) {
        try{
        const consulta = await prisma.consulta.update({
            where: { RG:RG },
            data: {Nome: Nome, RG: RG},
        });
        return consulta
        } catch (error) {
            console.log(error);
        }
    }

    async deletarConsulta(id: number) {
        try {
            const consulta = await prisma.consulta.delete({
                where: { id:id }
            });
            return console.log("consulta deletada");
        } catch(error){
            console.log(error);
        }
    }
}

export default new ConsultaServices();