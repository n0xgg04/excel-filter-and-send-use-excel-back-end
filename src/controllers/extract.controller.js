import ExcelReader from "../utils/index.js";

const extractDataController = async (req, res) => {
    const {fileList, get} = req.body;
    if (!fileList || fileList.length === 0) {
        res.status(400).send({
            status: false,
            message: 'No files selected',
        });
    } else {
        const excelReader = new ExcelReader(fileList);
        const data = await excelReader.getFiles();
        res.status(200).send({
            status: true,
            message: 'Files are uploaded',
            data: data
        });
    }
}

export default extractDataController;
