import { Router } from 'express';
import AgendaController from '../controllers/AgendaController';

const AgendaRouter = Router();

AgendaRouter.get('/Agendas', AgendaController.listarAgenda);

AgendaRouter.get('/Agenda/:id', AgendaController.listarAgenda);

AgendaRouter.post('/Agendas', AgendaController.criarAgenda);

AgendaRouter.patch('/Agendas/:id', AgendaController.atualizarAgenda);

AgendaRouter.delete('/Agendas/:id', AgendaController.deletarAgenda);

export default AgendaRouter;