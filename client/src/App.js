import Home from './components/Home';
import bgGif from './assets/bg.gif';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Validate from './components/Validate';
import Profile from './components/SellerProfile';
import Buyer from './components/Buyer';

function App() {
  return (
    <div className='font-[Poppins] '>
      <img src={bgGif} className='fixed -z-50 inline w-full h-full ' alt=""/>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Validate />} />
        <Route exact path='/profile/seller' element={<Profile />} />
        <Route exact path='/profile/buyer' element={<Buyer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
