import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useRouter } from 'next/router';
import canadaGeoJSON from './canada.json'; // Import the GeoJSON data
import json from '@/public/TestFile.json'; // Import the JSON data

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 59.652297,
  lng: -101.017033
};

const CanadianMap = ({ selectedMosid }) => {
  const router = useRouter();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (selectedMosid) {
      const filteredData = json.filter(item => item.trade === selectedMosid);
      const locations = filteredData.map(item => ({
        birth: item.birth,
        recruit: item.recruit
      }));
      setLocations(locations);
      console.log(`Locations for MOSID ${selectedMosid}:`, locations);
    }
  }, [selectedMosid]);

  const onLoad = (map) => {
    // Function to add GeoJSON data to the map
    const addGeoJSONData = (map) => {
      map.data.addGeoJson(canadaGeoJSON);
      map.data.setStyle({
        fillColor: 'green',
        strokeWeight: 1
      });

      // Add a click listener to the data layer
      map.data.addListener('click', (event) => {
        const provinceName = event.feature.getProperty('name'); 
        const bounds = new window.google.maps.LatLngBounds();
        event.feature.getGeometry().forEachLatLng((latlng) => {
          bounds.extend(latlng);
        });
        map.fitBounds(bounds);
        router.push(`/${provinceName}`);
      });
    };

    addGeoJSONData(map);
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyC8s3palf0DK_txfede-vhQ5mewpS1OSd0"}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          restriction: {
            latLngBounds: { north: 90, south: 40, west: -170, east: -15 },
            strictBounds: true
          }
        }}
        onLoad={onLoad}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.recuritcord} 
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default CanadianMap;