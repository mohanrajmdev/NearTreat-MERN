import React,{useState} from 'react';
import {toast} from 'react-toastify';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const [option, setOption] = useState('Buyer');
    const navigate = useNavigate();

    //values
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

  function handleChange(e) {
    const selectedOption = e.target.value;
    setOption(selectedOption);
    console.log(selectedOption);
  }


async function handleSubmit(e){
    e.preventDefault();
    if(email === '' || password === '') {
      
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

    return;
    }
    axios.get('http://localhost:5050/buyer',{email,password})
    .then(result => {
      console.log(result.data)
      if(result.data === "success") navigate('/profile/buyer');
    } )
    .catch(err => console.log(err));
    
  }

  return (
    <div className='main' >
        <h1 className=' font-bold text-2xl text-center mb-[10px]'>Login</h1>
        <form  className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>

            <input className='form_input' name="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the Email'  />

            <input className='form_input' name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter the Password'  />

            <span class="form_span">Select Buyer or Seller</span>

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
            
            <button className="button" type="submit">SIGN IN</button>
            
        </form>
        
    </div>
  )
}

export default Login
