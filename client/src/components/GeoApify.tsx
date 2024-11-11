// src/components/GeoapifyAutocomplete.tsx
import React, { useEffect, useRef, useState } from 'react';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import axios from 'axios';

interface Location {
    lat: number;
    lon: number;
}

const GeoapifyAutocomplete: React.FC = () => {
    const [location, setLocation] = useState<Location | null>(null);
    const autocompleteContainerRef = useRef<HTMLDivElement | null>(null);
    const autocompleteInstanceRef = useRef<GeocoderAutocomplete | null>(null);

    useEffect(() => {
        const fetchApiKeyAndInitialize = async () => {
            const response = await axios.get('/api/geoapify-key');
            const apiKey = response.data.apiKey;

            if (!autocompleteInstanceRef.current && autocompleteContainerRef.current) {
                autocompleteInstanceRef.current = new GeocoderAutocomplete(
                    autocompleteContainerRef.current,
                    apiKey,
                    { type: 'city' }
                );

                interface LocationProperties {
                    lat: number;
                    lon: number;
                }

                interface SelectedLocation {
                    properties: LocationProperties;
                }

                const handleSelect = (location: SelectedLocation | null) => {
                    if (location && location.properties) {
                        setLocation({
                            lat: location.properties.lat,
                            lon: location.properties.lon,
                        });
                    }
                };

                autocompleteInstanceRef.current.on('select', handleSelect);

                // Cleanup function: remove the 'select' listener on unmount
                return () => {
                    if (autocompleteInstanceRef.current) {
                        autocompleteInstanceRef.current.off('select', handleSelect);
                        autocompleteInstanceRef.current = null;  // Reset reference
                    }
                };
            }
        };

        fetchApiKeyAndInitialize();
    }, []);

    return (
        <div>
            <div id="autocomplete" className="autocomplete-container" ref={autocompleteContainerRef}></div>
            {location && (
                <div>
                    <h3>Selected Location:</h3>
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lon}</p>
                </div>
            )}
        </div>
    );
};

export default GeoapifyAutocomplete;