import { Router } from 'express';
import ConsultaControllers from '../controllers/ConsultaControllers';

const ConsultaRouter = Router();

ConsultaRouter.get('/Consultas', ConsultaControllers.listarConsulta);

ConsultaRouter.get('/Consulta/:id', ConsultaControllers.listarConsulta);

ConsultaRouter.post('/Consulta', ConsultaControllers.criarConsulta);

ConsultaRouter.patch('/Consulta/:id', ConsultaControllers.atualizarConsulta);

ConsultaRouter.delete('/Consulta/:id', ConsultaControllers.deletarConsulta);

export default ConsultaRouter;