import express from 'express';
import dotenv from 'dotenv';
import PacienteRouter from './routes/PacienteRoutes';
import SecretariaRouter from './routes/SecretariaRoutes';
import ConsultaRouter from './routes/ConsultaRoutes';

dotenv.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env' });

const app = express();

app.use(express.json());
app.use('/api', PacienteRouter);
app.use('/api', SecretariaRouter);
app.use('/api', ConsultaRouter);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log('Fail to load environment');
}
