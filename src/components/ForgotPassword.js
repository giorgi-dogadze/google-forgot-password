import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);
  const correctName = "Your Answer"; // Replace with the correct answer
  const correctPhone = "1234567890"; // Replace with the correct answer

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === correctName && phone === correctPhone) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        style={styles.logo}
      />
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Who is the most beautiful girl that you have seen?
          </label>
          <textarea
            style={styles.textarea}
            value={name}
            onChange={(e) => setName(e.target.value)}
            rows={3}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>What is her mobile number?</label>
          <input
            type="tel"
            style={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
        {isValid && (
          <p style={styles.validationMessage}>Your answer is correct!</p>
        )}
      </form>
    </div>
  );
};

// Styles (inspired by iPhone 15 Pro Max and Google's Forgot Password page)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#555",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    resize: "none",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#4285F4",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  validationMessage: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#34A853",
  },
};

export default ForgotPasswordForm;
