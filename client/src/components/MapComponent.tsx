import React, { useState, useEffect, useRef } from 'react';
import {
    APIProvider,
    ControlPosition,
    MapControl,
    AdvancedMarker,
    Map,
    useMap,
    useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { fetchGoogleMapsApiKey } from '../services/mapService.js';

const MapComponent: React.FC = () => {
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
    const [markerRef, marker] = useAdvancedMarkerRef();

    useEffect(() => {
        const loadApiKey = async () => {
            try {
                const key = await fetchGoogleMapsApiKey();
                setApiKey(key);
            } catch (error) {
                console.error("Error fetching Google Maps API key");
            }
        };
        loadApiKey();
    }, []);

    if (!apiKey) return <div>Loading...</div>;

    return (
        <APIProvider apiKey={apiKey} solutionChannel="GMP_devsite_samples_v3_rgmautocomplete">
            <Map
                mapId="bf51a910020fa25a"
                defaultZoom={3}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                gestureHandling="greedy"
                disableDefaultUI={true}
            >
                <AdvancedMarker ref={markerRef} position={null} />
            </Map>
            <MapControl position={ControlPosition.TOP}>
                <div className="autocomplete-control">
                    <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
                </div>
            </MapControl>
            <MapHandler place={selectedPlace} marker={marker} />
        </APIProvider>
    );
};

// Define MapHandler with useMap hook to adjust map based on selected place
interface MapHandlerProps {
    place: google.maps.places.PlaceResult | null;
    marker: google.maps.marker.AdvancedMarkerElement | null;
}

const MapHandler = ({ place, marker }: MapHandlerProps) => {
    const map = useMap();

    useEffect(() => {
        if (!map || !place || !marker) return;

        if (place.geometry?.viewport) {
            map.fitBounds(place.geometry.viewport);
        }
        marker.position = place.geometry?.location;
    }, [map, place, marker]);

    return null;
};

// Define PlaceAutocomplete without useMapsLibrary by directly using google.maps
interface PlaceAutocompleteProps {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!inputRef.current || !window.google) return;

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
            fields: ['geometry', 'name', 'formatted_address']
        });

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            onPlaceSelect(place);
        });
    }, [onPlaceSelect]);

    return (
        <div className="autocomplete-container">
            <input ref={inputRef} placeholder="Enter a location" />
        </div>
    );
};

export default MapComponent;
