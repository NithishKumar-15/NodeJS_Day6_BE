import nodemailer from "nodemailer";

import dotenv from "dotenv";

dotenv.config();

const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"nithishkumarmurugesan2001@gmail.com",
        pass:process.env.GMAIL_PASSWORD
    }
});

const mailOptions={
    from:"nithishkumarmurugesan2001@gmail.com",
    to:[],
    subject:"Data Added",
    text:"Your data added successfully"
};

export {transport,mailOptions};