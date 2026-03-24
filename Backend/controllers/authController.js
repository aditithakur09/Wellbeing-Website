const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const otpStore = {}; // temp storage

// Send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);

  try {
    await sendEmail(email, otp); // 🔥 pehle email bhejo

    otpStore[email] = otp; // ✔ only if success

    console.log("OTP SENT:", otp);

    res.json({ message: "OTP sent to email" });

  } catch (err) {
    console.log("EMAIL ERROR:", err); // 🔥 ab asli error dikhega

    res.status(500).json({
      message: "Failed to send OTP email"
    });
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (Number(otpStore[email]) !== Number(otp)) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  delete otpStore[email];

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
      console.log("✅ CREATED USER:", user);
    } else {
      console.log("✅ EXISTING USER:", user);
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ message: "Login success", token });

  } catch (err) {
    console.error("❌ DB ERROR:", err.message); // <-- ye line dekho terminal mein
    res.status(500).json({ message: "DB error", error: err.message });
  }
};