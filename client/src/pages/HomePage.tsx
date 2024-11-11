// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuroraLogEntry from '../components/AuroraLogEntry';
import LocationInput from '../components/LocationInput';
import GeoapifyAutocomplete from '../components/GeoApify';

interface LogEntry {
    date?: string;
    note: string;
    location?: string;
}

const HomePage: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isAddingEntry, setIsAddingEntry] = useState(false);
    const [logEntries, setLogEntries] = useState<LogEntry[]>([]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/'); // Redirect to login page
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleAddEntry = () => {
        setIsAddingEntry(true);
    };

    const handleSaveEntry = (note: string) => {
        setLogEntries((prevEntries) => [...prevEntries, { note }]);
        setIsAddingEntry(false);
    };

    return (
        <div>
            <h1>Welcome, {user?.name || 'User'}!</h1>
            <button onClick={handleLogout}>Sign Out</button>

            <GeoapifyAutocomplete />

            <LocationInput />

            <h2>Your Aurora Journal</h2>
            <button onClick={handleAddEntry}>Add New Entry</button>

            {isAddingEntry && (
                <AuroraLogEntry onSave={handleSaveEntry} />
            )}

            <div>
                {logEntries.length > 0 ? (
                    logEntries.map((entry, index) => (
                        <div key={index}>
                            <p>{entry.note}</p>
                        </div>
                    ))
                ) : (
                    <p>No journal entries yet.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;

