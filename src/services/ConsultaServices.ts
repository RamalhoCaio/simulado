import { PrismaClient, Consulta } from '@prisma/client';
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

    async atualizarConsulta(attConsulta: Consulta) {
        try{ 
        const consulta = await prisma.consulta.update({
            where: { id:attConsulta.id },
            data: attConsulta,
        });
        return consulta
        } catch (error) {
            console.log(error);
        }
    }

    async deletarConsulta(delConsulta: Consulta) {
        try {
            const consulta = await prisma.consulta.delete({
                where: { id:delConsulta.id }
            });
            return (console.log("consulta apagada"), true);
          
        } catch(error){
            console.log(error);
        }
    }
}

export default new ConsultaServices();