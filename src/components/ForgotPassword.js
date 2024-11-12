// src/components/ForgotPasswordForm.tsx
import React, { useState } from "react";

const ForgotPasswordForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isNameCorrect, setIsNameCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    console.log("inputValue", JSON.stringify(inputValue, null, 4));
    if (inputValue !== "") {
      setIsNameCorrect(true);
    } else {
      setIsNameCorrect(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div style={styles.container}>
        <div style={styles.celebrationContainer}>🎉</div>
        <p style={styles.successMessage}>
          Congrats! Your password was almost reset with the help of that
          beautiful girl. In order to finalize the reset process, you should ask
          her oute for helping you out in this process.
        </p>
      </div>
    );
  }

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
            onChange={handleNameChange}
            rows={3}
          />
          {isNameCorrect && (
            <p style={styles.confirmation}>✅ Correct answer!</p>
          )}
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
          {isLoading ? "Loading..." : "Submit"}
        </button>
        {isLoading && <div style={styles.spinner}></div>}
      </form>
    </div>
  );
};

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
    borderRadius: "12px",
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
    width: "95%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    resize: "none",
  },
  input: {
    width: "95%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#4285F4",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
  confirmation: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#34A853",
  },
  spinner: {
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #4285F4",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    animation: "spin 2s linear infinite",
    margin: "10px auto",
  },
  successMessage: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#34A853",
    textAlign: "center",
    padding: "10px",
  },
  celebrationContainer: {
    fontSize: "50px",
    textAlign: "center",
    marginBottom: "10px",
  },
};

// Animation keyframes (Add to global CSS for the spinner)
const styleSheet = document.styleSheets[0];
const keyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default ForgotPasswordForm;
