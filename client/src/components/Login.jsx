import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [option, setOption] = useState('Buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setOption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const url = option === 'Buyer' ? 'http://localhost:5050/buyer' : 'http://localhost:5050/seller';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);

        if (user) {
          const profileUrl = `/profile/${option.toLowerCase()}`;
          console.log('User authenticated. Redirecting to:', profileUrl);
          // Perform navigation to the profile page using your preferred routing method
          navigate(profileUrl);
        } else {
          console.log('Invalid credentials');
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  return (
    <div className='main'>
      <h1 className='font-bold text-2xl text-center mb-[10px]'>Login</h1>
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <input
          className='form_input'
          name='Email'
          type='email'
          placeholder='Enter the Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='form_input'
          name='password'
          type='password'
          placeholder='Enter the Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className='form_span'>Select Buyer or Seller</span>

        <div className='flex flex-row justify-around items-center w-[80%]'>
          <label className='container'>
            Buyer
            <input
              type='radio'
              name='radio'
              value='Buyer'
              checked={option === 'Buyer'}
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <span className='check'></span>
          </label>
        </div>

        <button className='button' type='submit'>
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Login;