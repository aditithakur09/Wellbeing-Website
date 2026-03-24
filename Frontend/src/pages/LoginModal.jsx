import { useState } from "react";
import styles from "./LoginModal.module.css";

function LoginModal({ onClose, onSuccess }) {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [emailError, setEmailError] = useState("");
    const [otpError, setOtpError] = useState("");
    const [loading, setLoading] = useState(false);

    const sendOtp = async () => {
        setEmailError("");

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("https://wellbeing-website-ip5w.vercel.app/api/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (res.ok) {
                setStep(2);
            } else {
                setEmailError(data.message || "Failed to send OTP. Please try again.");
            }
        } catch (err) {
            setEmailError("Unable to reach server. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        setOtpError("");

        if (!otp || otp.length !== 6) {
            setOtpError("Please enter the 6-digit OTP sent to your email.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("https://wellbeing-website-ip5w.vercel.app/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp })
            });

            const data = await res.json();

            if (data.token) {
                localStorage.setItem("token", data.token);
                if (onSuccess) onSuccess();
            } else {
                setOtpError("Incorrect OTP. Please check your email and try again.");
            }
        } catch (err) {
            setOtpError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e, action) => {
        if (e.key === "Enter") action();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                {/* Close Button */}
                <button className={styles.closeBtn} onClick={onClose}>✕</button>

                {/* Logo / Brand */}
                <div className={styles.brand}>
                    <div className={styles.brandDot} />
                    <span>Wellbeing</span>
                </div>

                {step === 1 && (
                    <div className={styles.stepContent}>
                        <h2>Welcome...</h2>
                        <p className={styles.subtitle}>Enter your email to receive a secure OTP</p>

                        <div className={styles.inputGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                                onKeyDown={(e) => handleKeyDown(e, sendOtp)}
                                className={emailError ? styles.inputError : ""}
                            />
                            {emailError && <p className={styles.errorMsg}>⚠ {emailError}</p>}
                        </div>

                        <button
                            className={styles.primaryBtn}
                            onClick={sendOtp}
                            disabled={loading}
                        >
                            {loading ? <span className={styles.spinner} /> : "Send OTP →"}
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.stepContent}>
                        <h2>Verify OTP</h2>
                        <p className={styles.subtitle}>
                            A 6-digit code was sent to <strong>{email}</strong>
                        </p>

                        <div className={styles.inputGroup}>
                            <label>One-Time Password</label>
                            <input
                                type="text"
                                placeholder="Enter 6-digit OTP"
                                value={otp}
                                maxLength={6}
                                onChange={(e) => { setOtp(e.target.value); setOtpError(""); }}
                                onKeyDown={(e) => handleKeyDown(e, verifyOtp)}
                                className={otpError ? styles.inputError : ""}
                            />
                            {otpError && <p className={styles.errorMsg}>⚠ {otpError}</p>}
                        </div>

                        <button
                            className={styles.primaryBtn}
                            onClick={verifyOtp}
                            disabled={loading}
                        >
                            {loading ? <span className={styles.spinner} /> : "Verify & Login →"}
                        </button>

                        <button className={styles.backBtn} onClick={() => { setStep(1); setOtpError(""); }}>
                            ← Change Email
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default LoginModal;
