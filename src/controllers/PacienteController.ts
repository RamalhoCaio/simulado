import { Paciente } from '@prisma/client';
import { Request, Response } from 'express';
import PacienteServices from '../services/PacienteServices';

class PacienteController {
  constructor() {}

  async listarPaciente(req: Request, res: Response) {
    const pacientes = await PacienteServices.listarPaciente();
    return res.status(200).json({
      status: 'ok',
      pacientes: pacientes,
    });
  }

  async atualizarPaciente(req: Request, res: Response) {
    return res.send('Atualizar Paciente');
  }

  async criarPaciente(req: Request, res: Response) {
    const newPaciente: Paciente = req.body;

    const result = await PacienteServices.criarPaciente(newPaciente);

    if (result) {
      res.status(200).json({
        status: 'tudo ok',
        paciente: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }

  async deletarPaciente(req: Request, res: Response) {
    return res.send('Deletar Paciente');
  }
}

export default new PacienteController();
