import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

const Map = () => {
  const polyline = [
    [51.505, -0.09],
    [50.51, 10],
    [10.51, -0.23],
  ];
  const redOptions = { color: "red" };
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[50.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Polyline pathOptions={redOptions} positions={polyline} />
      </MapContainer>
    </div>
  );
};

export default Map;
