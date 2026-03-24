const nodemailer = require("nodemailer");

const sendEmail = async (email, otp) => {
  try {
    // DEBUG: check env values
    console.log("ENV EMAIL:", process.env.EMAIL);
    console.log("ENV PASS:", process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`
    });

    // success log
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