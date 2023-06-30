import {sendMail} from '../utils/mailer.js';
const mailController = (req, res) => {
        const {mailList, title, content} = req.body;
        if (!mailList || mailList.length === 0) {
            res.status(400).send({
                status: false,
                message: 'No mail selected',
            });
        }

        sendMail(mailList, {
            subject: title,
            text: content
        })
        .then(() => {
            res.status(200).send({
                status: true,
                message: 'Mail sent',
            });
        })
            .catch((err) => {
                res.status(400).send({
                    status: false,
                    message: 'Mail not sent',
                    error: err
                });
            })
}

export default mailController;
