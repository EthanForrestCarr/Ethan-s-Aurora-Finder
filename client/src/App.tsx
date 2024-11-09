import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AuroraLogPage from './pages/AuroraLogPage';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/log" element={<AuroraLogPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
