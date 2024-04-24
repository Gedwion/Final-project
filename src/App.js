import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Register";

function App() {
  return (
    <Router>
      <div>
              {/* Define other routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
