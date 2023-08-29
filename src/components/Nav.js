import { useState } from 'react';
import logo from '../assets/little_lemon_logo.png'
import { Link } from 'react-router-dom'
import '../style/home.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  const closeMenu = () => {
    setShowMenu(false)
  }
  

  return (
    <>
       <nav className='large-nav' style={{backgroundColor:'white', height:'50px', width:'100%'}}>
        <img src={logo} alt="" style={{height:'40px', paddingLeft: '15px'}} />
        <div className='navLinks'>
          <Link to='/' relative='path'>
            Home
          </Link>
          <Link to='/about' relative='path'>
            About
          </Link>
          <Link to='/Menu' relative='path'>
            Menu
          </Link>
          <Link to='/Reservations' relative='path'>
            Reservations
          </Link>
          <Link to='/order' relative='path'>
            Order Online
          </Link>
          <Link to='/login' relative='path'>
            Login
          </Link>
        </div>
        <div className='hamIcon' onClick={openMenu}>
          {
            showMenu ? <CloseIcon fontSize='large'/>
            :
            <MenuIcon fontSize='large' />
          }
        </div>
      </nav>
      {showMenu && (
        <nav className='hamLinks'>
          <Link onClick={closeMenu} to='/' relative='path'>
            Home
          </Link>
          <Link onClick={closeMenu} to='/about' relative='path'>
            About
          </Link>
          <Link onClick={closeMenu} to='/Menu' relative='path'>
            Menu
          </Link>
          <Link onClick={closeMenu} to='/Reservations' relative='path'>
            Reservations
          </Link>
          <Link onClick={closeMenu} to='/order' relative='path'>
            Order Online
          </Link>
          <Link onClick={closeMenu} to='/login' relative='path'>
            Login
          </Link>
        </nav>
      )}
    </>
  )
}
export default Nav