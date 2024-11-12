import React, { useState } from "react";

const ForgotPasswordForm = () => {
  console.log("check ");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isNameCorrect, setIsNameCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState("en"); // 'en' for English, 'ka' for Georgian

  const translations = {
    en: {
      title: "Reset Password Security Questions",
      nameLabel: "Who is the most beautiful girl that you have seen?",
      phoneLabel: "What is her mobile number?",
      submitButton: "Submit",
      successMessage:
        "Congrats! Your password was almost reset with the help of that beautiful girl. In order to finalize the reset process, you should ask her out as a gesture for helping you out in this process.",
      correctAnswer: "✅ Correct answer!",
    },
    ka: {
      title: "პაროლის აღდგენის უსაფრთხოების კითხვები",
      nameLabel: "ვინ არის ყველაზე ლამაზი გოგო, რომელიც ოდესმე გინახავს?",
      phoneLabel: "რა არის მისი ტელეფონის ნომერი?",
      submitButton: "გაგზავნა",
      successMessage:
        "გილოცავთ! თქვენი პაროლი თითქმის აღდგა იმ ლამაზი გოგოს დახმარებით. პაროლის აღდგენის პროცესის დასასრულებლად, უნდა დაპატიჟოთ სადმე იგი დახმარებისთვის მადლობის ნიშნად.",
      correctAnswer: "✅ სწორი პასუხია!",
    },
  };
  console.log("check 1s");
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    if (inputValue !== "") {
      setIsNameCorrect(true);
    } else {
      setIsNameCorrect(false);
    }
  };
  console.log("check 2");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ka" : "en"));
  };
  console.log("check 3");

  const t = translations[language];

  if (isSubmitted) {
    return (
      <div style={styles.container}>
        <div style={styles.celebrationContainer}>🎉</div>
        <p style={styles.successMessage}>{t.successMessage}</p>
      </div>
    );
  }
  console.log("check 5");
  return (
    <div style={styles.pageContainer}>
      <button onClick={toggleLanguage} style={styles.languageToggle}>
        {language === "en" ? "KA" : "EN"}
      </button>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        style={styles.logo}
      />
      <div style={styles.container}>
        <h2 style={styles.title}>{t.title}</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>{t.nameLabel}</label>
            <textarea
              style={styles.textarea}
              value={name}
              onChange={handleNameChange}
              rows={3}
            />
            {isNameCorrect && (
              <p style={styles.confirmation}>{t.correctAnswer}</p>
            )}
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>{t.phoneLabel}</label>
            <input
              type="tel"
              style={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" style={styles.button}>
            {isLoading ? "Loading..." : t.submitButton}
          </button>
          {isLoading && <div style={styles.spinner}></div>}
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "30px",
    backgroundColor: "#f9f9f9",
  },
  logo: {
    position: "absolute",
    top: "20px",
    width: "150px",
  },
  languageToggle: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "14px",
    padding: "5px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#4285F4",
    color: "#fff",
    border: "none",
  },
  container: {
    marginTop: "180px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    width: "100%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "25px",
    fontWeight: "500",
    color: "#555",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
    textAlign: "center",
    padding: "20px",
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
