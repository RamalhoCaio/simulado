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

    async atualizarConsulta(id: number, data: Date, id_paciente: string, id_secretaria: string, nome_dent: string, rg_secretaria: number ) {
        try{ 
        const consulta = await prisma.consulta.update({
            where: { id:id },
            data: {id: id, data: data, id_paciente: id_paciente, id_secretaria: id_secretaria, nome_dent: nome_dent, rg_secretaria: rg_secretaria},
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