import React from 'react';
import AuroraLogEntry from '../components/AuroraLogEntry';

const AuroraLogPage: React.FC = () => {
    // Mock data for demonstration
    const logEntries = [
        {
            date: '2024-11-01',
            location: 'Fairbanks, Alaska',
            intensity: 'High',
            notes: 'Clear skies, great view of the auroras.',
        },
        {
            date: '2024-11-03',
            location: 'Yellowknife, Canada',
            intensity: 'Moderate',
            notes: 'Slightly cloudy, auroras visible but faint.',
        },
        {
            date: '2024-11-05',
            location: 'Reykjavik, Iceland',
            intensity: 'Low',
            notes: 'Auroras barely visible due to cloud cover.',
        },
    ];

    return (
        <div className="aurora-log-page">
            <h1>Your Aurora Log</h1>
            {logEntries.map((entry, index) => (
                <AuroraLogEntry
                    key={index}
                    date={entry.date}
                    location={entry.location}
                    intensity={entry.intensity}
                    notes={entry.notes}
                />
            ))}
        </div>
    );
};

export default AuroraLogPage;