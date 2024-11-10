import React, { useState } from 'react';

interface AuroraLogEntryProps {
    date?: string;
    intensity?: string;
    notes?: string;
    onSave: (note: string) => void;
    location?: string; // Optional: you can add other props if necessary
}

const AuroraLogEntry: React.FC<AuroraLogEntryProps> = ({ onSave, location }) => {
    const [note, setNote] = useState('');

    const handleSave = () => {
        if (note.trim()) {
            onSave(note);
            setNote(''); // Clear the input after saving
        }
    };

    return (
        <div>
            <h2>New Aurora Log Entry</h2>
            <p>Location: {location || 'Unknown'}</p>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter your notes here..."
            />
            <button onClick={handleSave}>Save Entry</button>
        </div>
    );
};

export default AuroraLogEntry;
