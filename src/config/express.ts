import express, {Application} from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

function configExpress(app: Application){
  app.use(cors())
  app.use(express.json());
  app.use(morgan('dev'));
}
export default configExpress;
