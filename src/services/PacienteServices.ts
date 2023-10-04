import { PrismaClient, Paciente } from '@prisma/client';
import { json } from 'stream/consumers';

const prisma = new PrismaClient();

class PacienteServices {
  constructor() {}

  async listarPaciente() {
    try {
      const pacientes = await prisma.paciente.findMany();
      return pacientes;
    } catch (error) {
      console.log(error);
    }
  }

  async criarPaciente(newPaciente: Paciente) {
    try {
      const paciente = await prisma.paciente.create({
        data: newPaciente,
      });
      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarPaciente(atualizadoPaciente: Paciente) {
    try {
      const paciente = await prisma.paciente.update({
        where: { id: atualizadoPaciente.id },
        data: atualizadoPaciente,
      });
      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarPaciente(id: string) {
    try {
      const paciente = await prisma.paciente.delete({
        where: { id: id },
      });
      return console.log('Paciente Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PacienteServices();
