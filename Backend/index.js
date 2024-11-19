const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SENDER,
            pass: process.env.PASS
        }
    });
    const mailOptions = {
        from: process.env.SENDER,
        to: process.env.MY_MAIL,
        subject: `Portfolio Email by ${req.body.name}`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            // console.log('Email sent: ' + info.response);
            res.status(200).send(`Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});