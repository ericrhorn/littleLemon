import logo from '../assets/little_lemon_logo.png'
import '../style/style.css'


const Nav = () => {
  return (
    <>
      <nav>
          <img src={logo} alt=""/>
          <div className='navLinks'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
            <a href="/reservations">Reservations</a>
            <a href="/order">Order Online</a>
            <a href="/login">Login</a>
          </div>
      </nav>
    </>
  )
}
export default Nav