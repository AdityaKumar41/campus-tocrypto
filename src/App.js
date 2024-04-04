// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/ContactUs/Contact";
import NotFound from "./pages/Error/404";
import Community from "./pages/community/Community";
import COE from "./pages/COE/COE";
import Event from "./pages/event/event";
import Bootcamp from './pages/bootcamp/Bootcamp';
// import Sticky from './components/sticky/sticky';
import Offline from "./pages/offline/offline";

function App() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Router>
      {online ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/COE" element={<COE />} />
            <Route path="/event" element={<Event />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/event-details/:id" element={<Bootcamp />} /> 
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Offline />
      )}
    </Router>
  );
}

export default App;
