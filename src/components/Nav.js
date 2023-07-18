import logo from '../assets/little_lemon_logo.png'
import { Link } from 'react-router-dom'
import '../style/home.css'


const Nav = () => {
  return (
    <>
      <nav>
          <img src={logo} alt=""/>
          <div className='navLinks'>
            <Link to='/' relative='path'>Home</Link>
            <Link to='/about' relative='path'>About</Link>
            <Link to='/Menu' relative='path'>Menu</Link>
            <Link to='/Reservations' relative='path'>Reservations</Link>
            <Link to='/order' relative='path'>Order Online</Link>
            <Link to='/login' relative='path'>Login</Link>
          </div>
      </nav>
    </>
  )
}
export default Nav