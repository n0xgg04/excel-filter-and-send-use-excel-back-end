const uploadController = (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        res.status(400).send({
            status: false,
            message: 'No files uploaded'
        });
    } else {
        const fileNames = files.map(file => file.filename);

        res.status(200).send({
            status: true,
            message: 'Files are uploaded',
            data: fileNames
        });
    }
}
export default uploadController;
