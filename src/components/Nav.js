import {Link} from 'react-router-dom';
import logo from '../assets/little_lemon_logo.png'
import '../style/style.css'


const Nav = () => {
  return (
    <>
      <nav>
          <img src={logo} alt=""/>
          <div className='navLinks'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Menu</a>
            <a href="">Reservations</a>
            <a href="">Order Online</a>
            <a href="">Login</a>
          </div>
      </nav>
    </>
  )
}
export default Nav