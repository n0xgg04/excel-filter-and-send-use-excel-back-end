import express from 'express';
import cors from 'cors';
import router from '../routes/index.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(cors({
    origin: '*',
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
dotenv.config();

app.use('/', router);

export default app;

