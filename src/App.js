import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import Order from './components/Order';
import Login from './components/Login';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Confirmation from './components/Confirmation';

function App(props) {

  const [dinerData, setDinerData] = useState([])



  return (
    <>
    {/* <Nav/> */}
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reservations' element={<BookingPage dinerData={dinerData} setDinerData={setDinerData}/>} />
          <Route path='confirmation' element={<Confirmation dinerData={dinerData} setDinerData={setDinerData} />}/>
          <Route path='/order' element={<Order/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
      {/* <Header/> */}
      <Footer/>
    </>
  );
}

export default App;
