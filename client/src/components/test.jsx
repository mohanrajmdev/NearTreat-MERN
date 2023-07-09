import React, { useEffect, useState } from 'react';

const LocationFinder = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetchLocationName(position.coords.latitude, position.coords.longitude);
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      const name = data.display_name;
      setLocationName(name);
    } catch (error) {
      setError('Failed to fetch location name.');
    }
  };

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <h3>Current Location:</h3>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <p>Location Name: {locationName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default LocationFinder;
