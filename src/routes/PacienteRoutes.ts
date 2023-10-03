import { Router } from 'express';
import PacienteController from '../controllers/PacienteController';

const PacienteRouter = Router();

PacienteRouter.get('/pacientes', PacienteController.listarPaciente);

PacienteRouter.get('/paciente/:id', PacienteController.listarPaciente);

PacienteRouter.post('/paciente', PacienteController.criarPaciente);

PacienteRouter.patch('/paciente/:id', PacienteController.atualizarPaciente);

PacienteRouter.delete('/paciente/:id', PacienteController.deletarPaciente);

export default PacienteRouter;
