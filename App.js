import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UpdateStatus from "./UpdateStatus";  // Import UpdateStatus component
import GetStatuses from "./GetStatuses";  // Import ViewStatuses component
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/update-status" element={<UpdateStatus />} />
        <Route path="/view-statuses" element={<GetStatuses />} />
      </Routes>
    </Router>
  );
};

export default App;
