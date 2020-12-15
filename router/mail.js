const express = require("express");
const nodemailer = require("nodemailer");

const mailRouter = express.Router();

// send Email route
mailRouter.post("/send", (req, res) => {
  const output = `
    <h2>New Message</h2>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
    <p>Phone No.: ${req.body.phone}</p>
    <p>Subject: ${req.body.subject}</p>
    <h3> Message </h3
    <p>${req.body.message}</p
    `;
  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.mayyelites.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "kim@mayyelites.com", // generated ethereal user
        pass: "Mabel@2005", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Mayy Elites Contat Form" <contact@mayyelites.com>', // sender address
      to: "info@mayyelites.com, kelvn.kimani@gmail.com", // list of receivers
      replyTo: req.body.email,
      subject: "Mayy Elites contact Form ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });
    res.redirect("/thanks");

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
});

module.exports = mailRouter;
