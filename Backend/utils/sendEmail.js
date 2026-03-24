const nodemailer = require("nodemailer");

const sendEmail = async (email, otp) => {
  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      family: 4, // force IPv4
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: `"Wellbeing App" <${process.env.EMAIL}>`,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`
    });

    console.log("EMAIL SENT:", info.response);

  } catch (err) {
    console.log("EMAIL ERROR:", err);
    throw err;
  }
};

module.exports = sendEmail;
