import { Router } from 'express';
import SecretariaControllers from '../controllers/SecretariaControllers';

const SecretariaRouter = Router();

SecretariaRouter.get('/secretarias', SecretariaControllers.listarSecretaria);

SecretariaRouter.get('/secretaria/:id', SecretariaControllers.listarSecretaria);

SecretariaRouter.post('/secretaria', SecretariaControllers.criarSecretaria);

SecretariaRouter.patch('/secretaria/:id', SecretariaControllers.atualizarSecretaria);

SecretariaRouter.delete('/secretaria/:id', SecretariaControllers.deletarSecretaria);

export default SecretariaRouter;
