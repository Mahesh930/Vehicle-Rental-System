import { useState } from "react";
import PropTypes from "prop-types";

function EmailVerification({ email }) {
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = () => {
    // Simulate sending OTP to the user's email
    console.log(`Sending OTP to ${email}`);
    setErrorMessage(""); // Clear any previous errors
    // In a real scenario, make an API call to send OTP
  };

  const handleVerifyOtp = () => {
    // Simulate OTP verification
    if (otp === "123456") {
      setIsVerified(true);
      alert("Email successfully verified!");
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="email-verification-container">
      <h3>Email Verification</h3>
      <p>A verification email has been sent to {email}.</p>
      <button onClick={sendOtp} className="send-otp-btn">
        Send OTP
      </button>

      <div className="otp-input">
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          placeholder="Enter OTP"
        />
        <button onClick={handleVerifyOtp} className="verify-otp-btn">
          Verify OTP
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {isVerified && <p className="success-message">Your email has been verified!</p>}
    </div>
  );
}
EmailVerification.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailVerification;
