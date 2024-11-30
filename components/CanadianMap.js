import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import canadaGeoJSON from "./canada.json"; // Add your downloaded GeoJSON file

const CanadianMap = () => {
    const onEachRegion = (region, layer) => {
        const regionName = region.properties.NAME; // Adjust according to GeoJSON structure
        layer.bindPopup(`Region: ${regionName}`);
        layer.on({
            mouseover: (event) => {
                layer.setStyle({
                    fillColor: "blue",
                    fillOpacity: 0.5,
                });
            },
            mouseout: (event) => {
                layer.setStyle({
                    fillColor: "white",
                    fillOpacity: 0.2,
                });
            },
            click: () => {
                alert(`Clicked on ${regionName}`);
            },
        });
    };

    return (
        <MapContainer
            center={[60, -95]} // Canada's geographical center
            zoom={4}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON data={canadaGeoJSON} onEachFeature={onEachRegion} />
        </MapContainer>
    );
};

export default CanadianMap;
