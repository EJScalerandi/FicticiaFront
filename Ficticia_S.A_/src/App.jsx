

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import RegisterForm from "./components/RegisterForm";
import UpDateForm from "./components/UpDateForm";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [userData, setUserData] = useState({ username: "usuarioEjemplo" });


    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
         
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="register" element={<RegisterForm />} />
                <Route 
                    path="update-form" 
                    element={<UpDateForm setUserData={setUserData} />} 
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
