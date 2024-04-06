const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// POST endpoint for sending emails
app.post("/send-email", (req, res) => {
  const { fullName, email, phoneNumber, message } = req.body;

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hadefbadreeddine@gmail.com", // Your Gmail email address
      pass: "HAD98-rou", // Your Gmail password
    },
  });

  // Email content
  const mailOptions = {
    from: "hadefbadreeddine@gmail.com",
    to: "annababadrou@gmail.com", // Recipient email address
    subject: "New Message from Contact Form from nodemailer",
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message:
      ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
