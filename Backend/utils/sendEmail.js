const nodemailer = require("nodemailer");

const sendEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Wellbeing App" <${process.env.BREVO_USER}>`,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`,
    });

    console.log("EMAIL SENT SUCCESS");
  } catch (err) {
    console.log("EMAIL ERROR:", err);
    throw err;
  }
};

module.exports = sendEmail;