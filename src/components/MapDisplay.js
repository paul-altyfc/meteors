import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapDisplay.css';
// import MeteorList from './MeteorList';

function MapDisplay({ meteors }) {
  return (
    <div className="leaflet-container">
      <Map center={[50.775, 6.0833]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {meteors
          .filter(m => m.reclat && m.reclong)
          .map(meteor => {
            return (
              <Marker
                key={meteor.id}
                position={[meteor.reclat, meteor.reclong]}
              >
                <Popup>
                  <p>{meteor.name}</p> <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
      </Map>
    </div>
  );
}

export default MapDisplay;
