import React, { useState } from 'react';
import axios from 'axios';

const UpdateStatus = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const [interested, setInterested] = useState(false);
  const [coffee, setCoffee] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/update-status', {
        email,
        fullName,
        age: parseInt(age, 10),
        relationshipStatus: status,
        interestedInRelationship: interested,
        comfortableForCoffee: coffee,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error updating status:', error);
      setMessage('Error updating status.');
    }
  };

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      padding: '40px',
      backgroundColor: '#f9f9f9',
      maxWidth: '600px',
      margin: '40px auto',
      borderRadius: '0px',
      boxShadow: '0 25px 60px black',
      textAlign: 'center',
    },
    header: {
      marginBottom: '20px',
    },
    title: {
      fontSize: '32px',
      color: '#1F509A',
      fontWeight: '600',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '16px',
      color: '#555',
    },
    
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      marginTop: '20px',
    },
    label: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#333',
      textAlign: 'left',
      marginBottom: '5px',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      width: '100%',
      boxSizing: 'border-box',
      outlineColor: '#1F509A',
      border: '2px solid rgba(0, 0, 0, 0.6)',
      backgroundColor: '#dadad3',
    },
    select: {
      padding: '25px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '7px solid #ddd',
      width: '100%',
      outlineColor: '#1F509A',
      outlineColor: '#1F509A',
      border: '2px solid rgba(0, 0, 0, 0.6)',
      backgroundColor: '#dadad3',
    },
    checkbox: {
      marginRight: '10px',
    },
    button: {
      padding: '15px',
      fontSize: '16px',
      border: 'none',
      backgroundColor: '#dadad3',
      color: 'black',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    message: {
      marginTop: '20px',
      fontSize: '16px',
      color: '#1F509A',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Update Your Relationship Status</h1>
        <p style={styles.subtitle}>
          Let others know about you. Build connections. Find your match. 💼
        </p>
      </header>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Full Name:</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={styles.input}
          required
        />
        <label style={styles.label}>Email Address:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <label style={styles.label}>Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
          required
        />
        <label style={styles.label}>Relationship Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.select}
          required
        >
          <option value="" disabled>
            Select your relationship status
          </option>
          <option value="Single">💖 Single</option>
          <option value="Married">💍 Married</option>
          <option value="Engaged">💎 Engaged</option>
          <option value="Long Distance">✈️ Long Distance</option>
          <option value="Didn't Find Perfect Person Yet">
            🤔 Didn't Find Perfect Person Yet
          </option>
        </select>
        <label style={styles.label}>
          <input
            type="checkbox"
            checked={interested}
            onChange={(e) => setInterested(e.target.checked)}
            style={styles.checkbox}
          />
          💕 Interested in a relationship?
        </label>
        <label style={styles.label}>
          <input
            type="checkbox"
            checked={coffee}
            onChange={(e) => setCoffee(e.target.checked)}
            style={styles.checkbox}
          />
          ☕ Comfortable for a coffee meeting?
        </label>
        <button type="submit" style={styles.button}>
          Submit Information
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default UpdateStatus;