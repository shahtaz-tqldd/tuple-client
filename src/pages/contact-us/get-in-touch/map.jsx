import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY,
  });

  const defaultCenter = { lat: 25.8888031, lng: -80.2620437 };
  const defaultZoom = 16;

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={defaultZoom}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ) : (
    <></>
  );
}
