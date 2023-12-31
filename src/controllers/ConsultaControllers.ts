import { Consulta } from '@prisma/client';
import { Request, Response } from 'express';
import ConsultaServices from '../services/ConsultaServices';

class ConsultaController {
  constructor() {}

  async listarConsulta(req: Request, res: Response) {
    const consulta = await ConsultaServices.listarConsulta();
    return res.status(200).json({
      status: 'ok',
      consultas: consulta,
    });
  }

  
  async criarConsulta(req: Request, res: Response) {
    const newConsulta: Consulta = req.body;
    
    const result = await ConsultaServices.criarConsulta(newConsulta);
    
    if (result) {
      res.status(200).json({
        status: 'tudo ok',
        consulta: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
  
  async atualizarConsulta(req: Request, res: Response) {
    const attConsulta: Consulta = req.body;

    const result = await ConsultaServices.atualizarConsulta(attConsulta)
    if (result) {
      res.status(200).json({
        status: 'consulta atualizada',
        consulta: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
    return res.send('Atualizar Consulta');
  }

  async deletarConsulta(req: Request, res: Response) {
    const delConsulta: Consulta = req.body;

    const result = await ConsultaServices.deletarConsulta(delConsulta);
    if (result) {
      res.status(200).json({
        status: 'consulta apagada',
        consulta: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
}

export default new ConsultaController();
