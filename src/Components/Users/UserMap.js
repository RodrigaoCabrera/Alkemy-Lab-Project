import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
import { Box } from '@chakra-ui/layout';
import { SearchLocation } from './SearchLocation';
import Loading from '../UI/Loading';

export const UserMap = ({setAddress}) => {

  const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key,
    libraries: ['places']
  });

  const [currentLocation, setCurrentLocation] = React.useState({
    lat: -34.60,
    lng: -58.37,
    name: 'Buenos Aires'
  });

  React.useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
      const pos = {lat, lng};
      setCurrentLocation({
        ...pos, 
        name: 'lat:' + pos.lat + ' lng:' + pos.lng
      });
    });
  }, []);

  React.useEffect(() => {
    setAddress(currentLocation);
  }, [currentLocation]);

  const completeRef = React.useRef();
  const onAutocompleteLoad = React.useCallback((complete) => {
    completeRef.current = complete;
  }, []);
  
  const onPlaceChanged = () => {
    setCurrentLocation({
      lat: completeRef.current.getPlace().geometry.location.lat(),
      lng: completeRef.current.getPlace().geometry.location.lng(),
      name: completeRef.current.getPlace().formatted_address
    });
  };

  return isLoaded ? (
    <Box>
      <Autocomplete
        onLoad={onAutocompleteLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <SearchLocation />
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={{
          width: '500px',
          height: '600px'
        }}
        center={currentLocation}
        zoom={10}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          disableDoubleClickZoom: true,
        }}
        onDblClick={(e) => {
          const pos = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          };
          setCurrentLocation({
            ...pos,
            name: `lat:${pos.lat}, lng:${pos.lng}`
          });
        }}
      >
        <Marker
          position={currentLocation}
        />
      </GoogleMap>
    </Box>
    
  ) : <Loading />;
};