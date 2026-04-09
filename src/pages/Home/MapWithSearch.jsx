import React, { useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
  Marker
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%"
};

const defaultCenter = {
  lat: 28.6139,
  lng: 77.2090 // Delhi
};

const MapWithSearch = () => {
  const searchBoxRef = useRef(null);
  const [center, setCenter] = useState(defaultCenter);

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length > 0) {
      const location = places[0].geometry.location;
      setCenter({
        lat: location.lat(),
        lng: location.lng()
      });
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={["places"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* SEARCH INPUT */}
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search location..."
            className="absolute top-4 left-4 w-64 px-4 py-2 rounded-lg shadow-lg outline-none z-10"
          />
        </StandaloneSearchBox>

        {/* MARKER */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithSearch;