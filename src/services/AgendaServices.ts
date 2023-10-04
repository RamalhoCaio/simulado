import { PrismaClient, Agenda } from '@prisma/client';
import { json } from 'stream/consumers';


const prisma = new PrismaClient();

class AgendaServices {
    constructor() {}

    async listarAgenda() {
        try {
          const agenda = await prisma.agenda.findMany();
          return agenda;
        } catch (error) {
          console.log(error);
        }
      }

    async criarAgenda(newAgenda: Agenda) {
        try {
            const agenda = await prisma.agenda.create({
              data: newAgenda,
            });
            return agenda;
          } catch (error) {
            console.log(error);
          }
    }

    async atualizarAgenda(id: string, data: Date, nome_pcte: string) {
        try{
        const agenda = await prisma.agenda.update({
            where: { id:id },
            data: {data: data, nomePcte:nome_pcte},
        });
        return agenda
        } catch (error) {
            console.log(error);
        }
    }

    async deletarAgenda(id: string) {
        try {
            const agenda = await prisma.agenda.delete({
                where: { id:id }
            });
            return console.log("Secretaria deletada");
        } catch(error){
            console.log(error);
        }
    }
}

export default new AgendaServices();