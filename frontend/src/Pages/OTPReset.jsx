import { useState } from "react";

function OTPReset() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);
  const handlePasswordChange = (e) => setNewPassword(e.target.value);

  const requestResetOtp = () => {
    // Simulate sending OTP for password reset
    console.log(`Sending OTP to ${email} for reset`);
    setMessage("OTP sent to your email.");
    // In a real scenario, you'd call an API to send the OTP
  };

  const resetPassword = () => {
    // Simulate OTP verification and password reset
    if (otp === "123456" && newPassword.length >= 6) {
      setMessage("Password reset successful!");
    } else {
      setMessage("Invalid OTP or password is too short.");
    }
  };

  return (
    <div className="otp-reset-container">
      <h3>Password Reset</h3>
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <button onClick={requestResetOtp} className="send-otp-btn">
          Send OTP
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      <div>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
        />
      </div>
      <div>
        <input
          type="password"
          value={newPassword}
          onChange={handlePasswordChange}
          placeholder="Enter new password"
        />
      </div>
      <button onClick={resetPassword} className="reset-password-btn">
        Reset Password
      </button>
    </div>
  );
}

export default OTPReset;
