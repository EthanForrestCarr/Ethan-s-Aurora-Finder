import React, { useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const MapComponent: React.FC<{ lat: number, lng: number }> = ({ lat, lng }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat, lng }}
            zoom={10}
        >
            <Marker position={{ lat, lng }} />
            {/* Add more markers here for recommended viewing spots */}
        </GoogleMap>
    );
};

export default MapComponent;
