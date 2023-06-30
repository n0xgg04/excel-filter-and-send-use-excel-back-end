import express from 'express';
import cors from 'cors';
import router from '../routes/index.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {v4} from 'uuid';

const app = express();
app.use(cors({
    origin: '*',
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
dotenv.config();
app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.use('/', router);

export default app;

