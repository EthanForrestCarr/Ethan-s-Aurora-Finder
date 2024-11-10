import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LocationInput from '../components/LocationInput';

const HomePage: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/'); // Redirect to login page
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div>
            <h1>Welcome, {user?.email || 'User'}!</h1>
            <p>WHOA.</p>
            <LocationInput />
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    );
};

export default HomePage;
