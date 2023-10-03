import { PrismaClient, Paciente } from '@prisma/client';
import { json } from 'stream/consumers';

const prisma = new PrismaClient();

class PacienteServices {
  constructor() {}

  async listarPaciente() {
    try {
      const pacientes = await prisma.user.findMany();
      return pacientes;
    } catch (error) {
      console.log(error);
    }
  }

  async criarPaciente(newPaciente: Paciente) {
    try {
      const paciente = await prisma.Paciente.create({
        data: newPaciente,
      });
      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarPaciente(id: number, email: string, name: string) {
    try {
      const paciente = await prisma.Paciente.update({
        where: { id: id },
        data: { email: email, name: name },
      });
      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarPaciente(id: number) {
    try {
      const paciente = await prisma.Paciente.delete({
        where: { id: id },
      });
      return console.log('Paciente Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PacienteServices();
