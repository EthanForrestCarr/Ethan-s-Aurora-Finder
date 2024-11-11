import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

export interface PlacesAutocompleteProps {
    setSelected: (location: { lat: number; lng: number }) => void;
}

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({ setSelected }) => {
    const {
        ready,
        value = "",
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete();

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            setSelected({ lat, lng });
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput value={value} onChange={(e) => setValue(e.target.value)} disabled={!ready} placeholder="Enter an address" />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({ place_id, description }) => (
                        <ComboboxOption key={place_id} value={description} />
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

export default function Places() {
    const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
        libraries: ["places"]
    });

    if (!isLoaded) {
        return <div>"Loading..."</div>;
    }

    return (
        <div className="places-container">
            <PlacesAutocomplete setSelected={setSelected} />
            {selected && (
                <GoogleMap
                    center={selected}
                    zoom={15}
                    mapContainerStyle={{ width: "100%", height: "400px" }}
                >
                    <Marker position={selected} />
                </GoogleMap>
            )}
        </div>
    );
}