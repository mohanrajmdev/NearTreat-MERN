import React,{useState} from 'react'

const Login = () => {
    const [option, setOption] = useState('Buyer');

  function handleChange(e) {
    const selectedOption = e.target.value;
    setOption(selectedOption);
    console.log(selectedOption);
  }

  return (
    <div className='main' >
        <h1 className=' font-bold text-2xl text-center mb-[10px]'>Login</h1>
        <form  className='flex flex-col justify-center items-center' onSubmit={(e) => {e.preventDefault();console.log("submitted")}}>

            <input className='form_input' name="Email" type='email' placeholder='Enter the Email' required />

            <input className='form_input' name="password" type="password" placeholder='Enter the Password' required />

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
