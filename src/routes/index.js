import express from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';
import uploadController from '../controllers/upload.controller.js'
import extractDataController from "../controllers/extract.controller.js";
import mailController from "../controllers/mail.controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
    destination: join(__dirname, '..', 'storage', 'temp'),
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        const filename = file.fieldname + '-' + uniqueSuffix + extension;
        callback(null, filename);
    }
});
const upload = multer({ storage: storage });
router.get('/', (req, res) => {
    res.send('Hello, world!');
});
router.post('/upload', upload.array('files'),uploadController);
router.get('/getdata', (req, res) => {
    const params = req.query;
    if(!!params.data) return ;
})
router.post('/extractData', extractDataController);
router.post('/sendMail',mailController);

export default router;
