import React, { useEffect, useState } from "react";
import axios from "axios";

const GetStatuses = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/get-statuses");
        setStatuses(response.data);
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };

    fetchStatuses();
  }, []);

  const sendMail = (email) => {
    window.location.href = `mailto:${email}?subject=Coffee%20Invitation&body=Hi%20there,%0A%0AI%20would%20love%20to%20invite%20you%20for%20a%20coffee.%20Let%20me%20know%20when%20you're%20available!%0A%0ABest%20Regards`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>All User Relationship Details 💖</h2>
      <div style={styles.cardContainer}>
        {statuses.map((status, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.name}>{status.fullName}</h3>
            <p><strong>Age:</strong> {status.age}</p>
            <p><strong>Relationship Status:</strong> {status.relationshipStatus}</p>
            <p><strong>Interested in Relationship:</strong> {status.interestedInRelationship ? "Yes 💑" : "No 🚫"}</p>
            <p><strong>Comfortable for Coffee:</strong> {status.comfortableForCoffee ? "Yes ☕" : "No 🚫"}</p>
            <button
              style={styles.button}
              onClick={() => sendMail(status.email)}
              disabled={!status.comfortableForCoffee}
            >
              Invite for Coffee
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    color: "#1F509A",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "left",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1F509A",
  },
  button: {
    backgroundColor: "#1F509A",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
  },
};

export default GetStatuses;
