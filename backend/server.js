const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, company, email, phone, subject, message, newsletter } = req.body;

  // Configure your email transport (use your real credentials in production)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arthonnati.fs@gmail.com",      // replace with your email
      pass: "blpc nqpi armg okme",         // use an app password, not your real password
    },
  });

  const mailOptions = {
    from: email,
    to: "arthonnati.fs@gmail.com",          // where you want to receive the contact messages
    subject: `Contact Form: ${subject}`,
    text: `
    First Name: ${firstName}
    Last Name: ${lastName}
    Company: ${company}
    Email: ${email}
    Phone: ${phone}
    Subject: ${subject}
    Message: ${message}
    Newsletter: ${newsletter ? "Yes" : "No"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));