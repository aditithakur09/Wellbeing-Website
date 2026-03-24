const axios = require("axios");

const sendEmail = async (email, otp) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Wellbeing App", email: "noreply@wellbeing.brevo.com" },
        to: [{ email: email }],
        subject: "OTP Verification",
        textContent: `Your OTP is ${otp}`,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("EMAIL SENT SUCCESS");
  } catch (err) {
    console.log("EMAIL ERROR:", err.response?.data || err.message);
    throw err;
  }
};

module.exports = sendEmail;