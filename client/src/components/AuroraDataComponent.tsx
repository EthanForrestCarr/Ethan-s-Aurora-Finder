import React from 'react';

interface AuroraDataProps {
    data: {
        ace: {
            kp: string;
            speed: string;
            density: string;
            // Add more fields as needed
        };
        probability: {
            value: number;
            colour: string;
        };
        // Add more fields if needed
    } | null;
}

const AuroraDataComponent: React.FC<AuroraDataProps> = ({ data }) => {
    if (!data) {
        return <p>No data available</p>;
    }

    return (
        <div>
            <h2>Aurora Forecast</h2>
            <p>Kp Index: {data.ace.kp}</p>
            <p>Probability of Visibility: {data.probability.value}%</p>
            <p>Colour Indicator: {data.probability.colour}</p>
            {/* Add more data points as needed */}
        </div>
    );
};

export default AuroraDataComponent;
