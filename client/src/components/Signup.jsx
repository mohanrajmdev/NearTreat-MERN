import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { toast } from 'react-toastify';

const Signup = () => {
  const [option, setOption] = useState('Buyer');
  const [value, setValue] = useState('Pushcart');
  const [currentLocation, setCurrentLocation] = useState(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [recipe,setRecipe] = useState('');

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [password,setPassword] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleOption(e) {
    const selectedOption = e.target.value;
    setOption(selectedOption);
    console.log(selectedOption);
  }

 async function handleSubmit(e){
    e.preventDefault();
    
    if(option === "Buyer"){

      if(!name || !email || !number || !password ){
          toast.warn('please enter the values ...', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return ;
        }

      const newObj={name,email,mobile_number:number,password};
      await fetch('http://localhost:5050/buyer', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
          })
      }
      else if(option === "Seller"){

        if(!name || !email || !number || !password || !recipe || !value || !city || !street || !currentLocation || !district){
          toast.warn('please enter the values ...', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return ;
        }

        const newObj = {name,email,mobile_number:number,password,stall_type:value,recipes:recipe,location:city+" "+street,latitude:currentLocation?.latitude,longitude:currentLocation?.longitude,district};

        await fetch('http://localhost:5050/seller', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
          }).then(() => {
              toast.success('Account created Successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
               
          })
      }

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

  // useEffect(() => {
  //   handleLocationClick(); // Call handleLocationClick on component mount to get initial location
  // }, []);

  return (
    <div className='main'>
      <h1 className='font-bold text-2xl text-center mb-[10px]'>Sign Up</h1>

      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <input className='form_input' name='Name' type='text' placeholder='Enter the Name'  value={name} onChange={(e) => setName(e.target.value)}/>
        <input className='form_input' name='Email' type='email' placeholder='Enter the Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <input className='form_input' name='phonenumber' type='tel' placeholder='+91 97865xxxxx' value={number} onChange={(e) => setNumber(e.target.value)} pattern='[0-9]{10}'  />
        <input className='form_input' name='password' type='password' placeholder='Enter the Password' value={password} onChange={(e) => setPassword(e.target.value)}  />

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
              <input className='form_input' name='recipe' placeholder='Enter the recipes' value={recipe} onChange={(e) => setRecipe(e.target.value)} type='text' />
              <br />
              <span className='text-sm '>* Enter the available recipes separated by comma(,)</span>
            </label>

            {/* <div className='flex flex-row justify-between items-end bg-[#ecf0f3] tablet:w-[90%] m-[10px] rounded-[12px] shadow-[0px_5px_5px_5px_#00000024]'> */}

                {/* <p>Latitude: {currentLocation?.latitude}</p>
                <p>Longitude: {currentLocation?.longitude}</p> */}
                {
                  (street || city || district)?
                  <div className='flex flex-col justify-center p-[6px] w-[70%] bg-[#ecf0f3] m-[10px] rounded-[12px] shadow-[0px_5px_5px_5px_#00000024]'>
                  <p className='p-[5px] text-left'><span className=' text-[#D2042D]'>Street:</span> {street} , {city}</p>
                  <p className='text-left p-[5px] '> <span className='text-[#D2042D]'>District:</span> {district}</p>
                  </div>:
                  <>
                  <div
                    className='bg-[#D2042D] p-[10px] rounded-[12px] m-[10px] text-white text-lg font-semibold cursor-pointer w-fit h-fit'
                    onClick={handleLocationClick}
                  >
                    Get Location
                  </div>
                  </>
                }
                
             
              
            {/* </div> */}
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
