import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import Order from './components/Order';
import Login from './components/Login';

import {HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Confirmation from './components/Confirmation';

import background from './assets/restaurant.jpg'



function App(props) {

  const [dinerData, setDinerData] = useState([])

  return (
    <>
    <div style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}>
      {/* <BrowserRouter> */}
      <HashRouter basename='/'>
        <Nav/>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<Menu/>} />
            <Route path='/reservations' 
              element={<BookingPage 
                dinerData={dinerData} 
                setDinerData={setDinerData}
                />} />
            <Route path='confirmation' 
              element={<Confirmation 
                dinerData={dinerData} 
                setDinerData={setDinerData} 
                />}/>
            <Route path='/order' element={<Order/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </HashRouter>
      {/* </BrowserRouter> */}
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
