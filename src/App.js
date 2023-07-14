import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Order from './components/Order';
import Login from './components/Login';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reservations' element={<Reservations/>} />
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
