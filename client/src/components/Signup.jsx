import React, { useState } from 'react';

const Signup = () => {
  const [option, setOption] = useState('Buyer');
  const [value, setValue] = useState('Pushcart');

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
      const newObj={name,email,mobile_number:number,password};
      await fetch('http://localhost:5050/buyer', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
          })
        
      console.log(newObj);
      }

  }

  return (
    <div className='main'>
        <h1 className=' font-bold text-2xl text-center mb-[10px]'>Sign Up</h1>

      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <input className='form_input' name='Name' type='text' placeholder='Enter the Name' required value={name} onChange={(e) => setName(e.target.value)}/>
        <input className='form_input' name='Email' type='email' placeholder='Enter the Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className='form_input' name='phonenumber' type='tel' placeholder='+91 97865xxxxx' value={number} onChange={(e) => setNumber(e.target.value)} pattern='[0-9]{10}' required />
        <input className='form_input' name='password' type='password' placeholder='Enter the Password' value={password} onChange={(e) => setPassword(e.target.value)} required />

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
        {
            option === "Seller"?
            <>
            <label className='m-[10px]'>Select your stall type {" "}
            <select value={value} className=' rounded-md p-[8px]' onChange={handleChange}>

            <option value="Pushcart">Pushcart</option>
            <option value="Cycle richshaw stall">Cycle rickshaw stall</option>
            <option value="Food truck">Food truck</option>
            <option value="Handcart">Handcart</option>
            <option value="kiosks">Kiosks</option>
            <option value="Barbecue stall">Barbecue stall</option>
            <option value="Thali stall">Thali stall</option>
            <option value="chaat stall">Chaat stall</option>
            <option value="Ice cream cart">Ice cream cart</option>
            <option value="Sweet stall">Sweet stall</option>

            </select>
            </label>

            <label>
                <input className='form_input' name="recipe" placeholder="Enter the recipes" type='text' /><br/>
                <span className='text-sm '>* Enter the available recipes separated<br/> by comma(,)</span>
            </label> 

            <button className="button" >Get Location</button>
            </>:
            <>
            {/* <label className='m-[10px]'>
            <input className='form_input' name="recipe" placeholder="Enter the recipes" type='text' /><br/>
            <span className='text-sm '>* Enter the recipes you want to buy separated <br/>by comma(,)</span>
            </label>  */}
            </>
        }

        <button className='button' type='submit'>
          SIGN UP
        </button>
        
      </form>
    </div>
  );
};

export default Signup;
