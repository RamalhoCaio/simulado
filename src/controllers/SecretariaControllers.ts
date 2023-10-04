import { Secretaria } from '@prisma/client';
import { Request, Response } from 'express';
import SecretariaServices from '../services/SecretariaServices';

class SecretariaController {
  constructor() {}

  async listarSecretaria(req: Request, res: Response) {
    const secretarias = await SecretariaServices.listarSecretaria();
    return res.status(200).json({
      status: 'ok',
      pacientes: secretarias,
    });
  }

  async atualizarSecretaria(req: Request, res: Response) {
    const attSecretaria: Secretaria = req.body;

    const result = await SecretariaServices.atualizarSecretaria(attSecretaria)
    if (result) {
      res.status(200).json({
        status: 'secretaria atualizado',
        secretaria: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }

    return res.send('Atualizar Secretaria');
  }

  async criarSecretaria(req: Request, res: Response) {
    const newSecretaria: Secretaria = req.body;

    const result = await SecretariaServices.criarSecretaria(newSecretaria);

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

  async deletarSecretaria(req: Request, res: Response) {
    return res.send('Deletar Paciente');
  }
}

export default new SecretariaController();
