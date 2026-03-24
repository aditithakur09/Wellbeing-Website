const nodemailer = require("nodemailer");

const sendEmail = async (email, otp) => {
  try {
    console.log("ENV EMAIL:", process.env.EMAIL);
    console.log("ENV PASS:", process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      connectionTimeout: 10000,
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

    console.log("EMAIL SENT SUCCESS:", info.response);

  } catch (err) {
    console.log("EMAIL ERROR FULL:", err);

    if (err.response) {
      console.log("RESPONSE:", err.response);
    }

    if (err.code) {
      console.log("ERROR CODE:", err.code);
    }

    throw err;
  }
};

module.exports = sendEmail;
