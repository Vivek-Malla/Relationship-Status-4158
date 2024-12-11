import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const handleStatusUpdate = async () => {
    if (!relationshipStatus) return;

    try {
      const user = auth.currentUser;
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { relationshipStatus });
      alert("Status updated!");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Dashboard</h2>
      <div>
        <label>Update your relationship status: </label>
        <select value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)}>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Engaged">Engaged</option>
          <option value="Long Distance">Long Distance</option>
          <option value="Didn't Find Perfect Person Yet">Didn't Find Perfect Person Yet</option>
        </select>
        <button onClick={handleStatusUpdate}>Update</button>
      </div>
      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
