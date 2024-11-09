import React from 'react';

interface AuroraLogEntryProps {
    date: string;
    location: string;
    intensity: string;
    notes?: string;
}

const AuroraLogEntry: React.FC<AuroraLogEntryProps> = ({ date, location, intensity, notes }) => {
    return (
        <div className="aurora-log-entry">
            <h3>{date}</h3>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Intensity:</strong> {intensity}</p>
            {notes && <p><strong>Notes:</strong> {notes}</p>}
        </div>
    );
};

export default AuroraLogEntry;