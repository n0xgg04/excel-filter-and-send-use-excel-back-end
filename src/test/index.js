import ExcelReader from '../utils/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
    path.resolve(__dirname, '../storage/temp/1.xlsx'),
    path.resolve(__dirname, '../storage/temp/2.xlsx')
];

const excelReader = new ExcelReader(files);
await excelReader.readFiles();
console.log(excelReader.getFiles());
