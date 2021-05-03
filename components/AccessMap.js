import { GoogleMap, InfoWindow, LoadScript } from "@react-google-maps/api";
import styles from "./styles/AccessMap.module.css";

const AccessMap = () => {
  const containerStyle = {
    width: "100vw",
    height: "100%",
  };

  const center = {
    lat: 35.66275502458581,
    lng: 139.73223219955887,
  };
  const point = {
    lat: 35.66275502458581,
    lng: 139.73223219955887,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <InfoWindow position={point}>
          <div className={styles.name}>
            <p>マハラジャ六本木</p>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
};

export default AccessMap;
