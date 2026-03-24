const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (email, otp) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Wellbeing App <onboarding@resend.dev>",
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is ${otp}`,
    });

    if (error) throw error;
    console.log("EMAIL SENT:", data);
  } catch (err) {
    console.log("EMAIL ERROR:", err);
    throw err;
  }
};

module.exports = sendEmail;