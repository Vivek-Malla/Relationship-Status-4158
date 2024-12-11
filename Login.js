import React, { useEffect } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/update-status"); // Redirect to dashboard on success
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    onAuthStateChanged(auth, (user) => {
      if (user) navigate("/update-status");
    });
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to YourMatch</h1>
        <p style={styles.subtitle}>Discover meaningful connections. Your journey begins here!</p>
        <button
          onClick={handleGoogleLogin}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login with Google 
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "100%",
    backgroundColor: "#ffffff",
    fontFamily: "'Roboto', sans-serif",
  },
  card: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "50px 30px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    maxWidth: "450px",
    width: "90%",
  },
  title: {
    fontSize: "48px", // Increased size
    color: "#1F509A",
    marginBottom: "10px", // Adjusted spacing
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "22px",
    color: "#555555",
    marginBottom: "40px",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    border: "none",
    padding: "15px 40px",
    fontSize: "20px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  buttonHover: {
    backgroundColor: "white",
  },
};

export default Login;
