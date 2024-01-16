import { Fragment } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

export const Gmap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.VITE_APP_API_KEY,
  });
  return (
    <Fragment>
      <div style={{ width: "100%", height: "50vh" }}>
        {isLoaded ? (
          <GoogleMap
            center={{
              lat: 40.3947365,
              lng: 49.6898045,
            }}
            zoom={10}
            mapContainerStyle={{ width: "100%", height: "50vh" }}
          >
            {/* {markerks here} */}
          </GoogleMap>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Gmap;
