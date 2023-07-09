import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Signup = () => {
  const [option, setOption] = useState('Buyer');
  const [value, setValue] = useState('Pushcart');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleOption(e) {
    const selectedOption = e.target.value;
    setOption(selectedOption);
    console.log(selectedOption);
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCurrentLocation({ latitude, longitude });
          console.log('Latitude:', latitude);
          console.log('Longitude:', longitude);
          fetchLocationDetails(latitude, longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const fetchLocationDetails = async (latitude, longitude) => {
    try {
      // Replace YOUR_API_KEY with your actual MapQuest API key
      const apiKey = '1YCcEbdT3y5XkYbLvlnKK46SSWYjEkYa';
      const geocodingAPI = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${latitude},${longitude}`;

      const response = await fetch(geocodingAPI);
      const data = await response.json();

      if (response.ok) {
        const { street, adminArea5: city, adminArea4: district } = data.results[0].locations[0];
        setStreet(street || '');
        setCity(city || '');
        setDistrict(district || '');
      } else {
        console.error('Error getting location details:', data.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error getting location details:', error);
    }
  };

  useEffect(() => {
    handleLocationClick(); // Call handleLocationClick on component mount to get initial location
  }, []);

  return (
    <div className='main'>
      <h1 className='font-bold text-2xl text-center mb-[10px]'>Sign Up</h1>

      <form className='flex flex-col justify-center items-center'>
        <input className='form_input' name='Name' type='text' placeholder='Enter the Name' required />
        <input className='form_input' name='Email' type='email' placeholder='Enter the Email' required />
        <input className='form_input' name='phonenumber' type='tel' placeholder='+91 97865xxxxx' pattern='+91 [0-9]{10}' required />
        <input className='form_input' name='password' type='password' placeholder='Enter the Password' required />

        <span className='form_span'>Select Buyer or Seller</span>

        <div className='flex flex-row justify-around items-center w-[80%]'>
          <label className='container'>
            Buyer
            <input
              type='radio'
              name='radio'
              value='Buyer'
              checked={option === 'Buyer'}
              onChange={handleOption}
            />
            <span className='check'></span>
          </label>
          <label className='container'>
            Seller
            <input
              type='radio'
              name='radio'
              value='Seller'
              checked={option === 'Seller'}
              onChange={handleOption}
            />
            <span className='check'></span>
          </label>
        </div>

        {option === 'Seller' && (
          <>
            <label className='m-[10px]'>
              Select your stall type{' '}
              <select value={value} className=' rounded-md p-[8px]' onChange={handleChange}>
                <option value='Pushcart'>Pushcart</option>
                <option value='Cycle richshaw stall'>Cycle rickshaw stall</option>
                <option value='Food truck'>Food truck</option>
                <option value='Handcart'>Handcart</option>
                <option value='kiosks'>Kiosks</option>
                <option value='Barbecue stall'>Barbecue stall</option>
                <option value='Thali stall'>Thali stall</option>
                <option value='chaat stall'>Chaat stall</option>
                <option value='Ice cream cart'>Ice cream cart</option>
                <option value='Sweet stall'>Sweet stall</option>
              </select>
            </label>


            <label>
              <input className='form_input' name='recipe' placeholder='Enter the recipes' type='text' />
              <br />
              <span className='text-sm '>* Enter the available recipes separated by comma(,)</span>
            </label>

            <div className='flex flex-row justify-between items-end bg-[#ecf0f3] tablet:w-[80%] m-[10px] rounded-[12px] shadow-[0px_10px_10px_10px_#00000024]'>
              <div className='text-lg p-[10px]'>
                <p>Latitude: {currentLocation?.latitude}</p>
                <p>Longitude: {currentLocation?.longitude}</p>
                <p>Street: {street}</p>
                <p>City: {city}</p>
                <p>District: {district}</p>
              </div>
              <div
                className='bg-[#D2042D] p-[10px] rounded-[12px] text-white text-lg font-semibold cursor-pointer w-fit h-fit'
                onClick={handleLocationClick}
              >
                Click here
              </div>
            </div>
          </>
        )}

        <button className='button' type='submit'>
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;
