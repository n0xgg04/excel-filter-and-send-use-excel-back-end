import xlsx from 'xlsx';
import { fileURLToPath } from 'url';
import path from 'path';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDirectory = path.dirname(currentFilePath);
class ExcelReader {
    constructor(filesList) {
        this.files = filesList;
        this.data = [];
    }
     readFiles() {
        return new Promise((resolve) => {
            let result = {};
            this.files.forEach((file) => {
                let workbook = xlsx.readFile(`${currentDirectory}/../storage/temp/${file}`);
                let worksheet = workbook.Sheets[workbook.SheetNames[0]];
                result[file] = xlsx.utils.sheet_to_json(worksheet);
            });
            resolve(result)
        });
    }

    async getFiles() {
        return await this.readFiles();
    }
}

export default ExcelReader;
