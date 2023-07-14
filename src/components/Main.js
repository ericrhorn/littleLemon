import '../style/style.css';
import titleImg from '../assets/food.png';
import food1 from '../assets/greek-salad.jpg'
import food3 from '../assets/lemon_dessert.jpg'
import food2 from '../assets/bruchetta.png'

import { useNavigate } from 'react-router-dom';

import MopedIcon from '@mui/icons-material/Moped';

const Main = () => {

  const navigate = useNavigate();

const handlePageChange = () => {
window.location.href="/order"
}

  return (
    <>
    <div className="container">
      <div className='color'>
        <div className='header'>
          <div className='title-content'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediteranean resturant, focused on traditional recipies served with a modern twist</p>
            <button onClick={() => navigate('/reservations')}>Reserve a table</button>
          </div>
          
          <div className='title-image'>
            <img style={{height: "325px", width: '300px'}} className='image' src={titleImg} alt="" />
          </div>
        </div>
          

      </div>
        <div className='menu-container'>
          <div className='menu-banner'>
            <h1>This weeks specials!</h1>
            <button onClick={() => navigate('/order')}>Online Menu</button>
          </div>

          <div className='menu-items'>
            <div className='item'>
              <div>
                <img style={{height: '166px'}} src={food1} alt="" />
              </div>
              <div className='item-name'>
                <h4>Greek Salad</h4>
                <h4 className='money'>$12.99</h4>
              </div>
              <div className='item-desc'>
                <p>
                  The famous greek salad of chrispy lettuce, peppers, olives, and our Chiago style feta cheese, garnished with crunchy garlic and rosemary crutons
                </p>
              </div>
              <div className='item-delivery'>
                <div style={{marginTop: '-20px'}}>
                    <h4><a href="/order">Order a delivery</a></h4>
                </div>
                <div className='icon'>
                  <MopedIcon onClick={handlePageChange}/>
                </div>
              </div>
            </div>
            <div className='item'>
              <div>
                <img style={{height: '166px'}} src={food2} alt="" />
              </div>
              <div className='item-name'>
                <h4>Bruchetta</h4>
                <h4 className='money'>$5.99</h4>
              </div>
              <div className='item-desc'>
                <p>
                  Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </p>
              </div>
                <div className='item-delivery'>
                <div style={{marginTop: '-20px'}}>
                    <h4><a href="/order">Order a delivery</a></h4>
                </div>
                <div className='icon'>
                  <MopedIcon onClick={handlePageChange}/>
                </div>
              </div>

            </div>
            <div className='item'>
              <div>
                <img style={{height: '166px', width:'250px'}} src={food3} alt="" />
              </div>
              <div className='item-name'>
                <h4>Lemon Dessert</h4>
                <h4 className='money'>$12.99</h4>
              </div>
              <div className='item-desc'>
                <p>
                  This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
              </div>
                <div className='item-delivery'>
                  <div style={{marginTop: '-20px'}}>
                      <h4><a href="/order">Order a delivery</a></h4>
                  </div>
                  <div className='icon'>
                    <MopedIcon onClick={handlePageChange}/>
                  </div>
              </div>
            </div>
          </div>
        </div>


    </div>


    </>
  )
}
export default Main