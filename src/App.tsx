import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Details from "./pages/Details";
import RSVP from "./pages/RSVP";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);

  // return (
  //   <div>
  //     {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
  //     <Button colour="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
  //   </div>
  // )

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/RSVP" element={<RSVP />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
