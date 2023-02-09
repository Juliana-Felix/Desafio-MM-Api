import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//import './database';
import errorHandler from './middleware/error-handler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(routes);
app.use((req, res, next) => {
  res.status(404).json();
});
app.use(errorHandler);

export { app };