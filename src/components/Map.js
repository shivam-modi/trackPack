import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

const Map = (props) => {
  const redOptions = { color: "red" };
  const path = props.path;
  var Path = [];
  if (path) {
    Path = path?.split("-");
    Path = Path.splice(1);
    Path = Path?.map((location) => {
      return location.split(",");
    });
    console.log(Path);
  }

  return (
    <div>
      <MapContainer
        center={[20.593683, 78.962883]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Path?.map((pos, idx) => {
          return (
            <Marker position={pos} key={idx}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}

        <Polyline pathOptions={redOptions} positions={Path} />
      </MapContainer>
    </div>
  );
};

export default Map;
