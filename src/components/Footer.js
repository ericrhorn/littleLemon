import '../style/footer.css'
import logo from '../assets/little_lemon_logo.png'

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-container">
        <div className="footer-image">
          <img src={logo} alt="" />
          <p>
            @LittleLemonRestaurant
          </p>
        </div>
        <div className="footer-info">
          <h4>
            Resturant Hours
          </h4>
          <p>
            Mon - Thurs 10am - 2pm & 4pm - 10pm
            <br/>
            Fri - Sun 8am - 2pm & 4pm - 11pm
          </p>
        </div>
        <div className="footer-location">
          <h4>
            Contanct Us
          </h4>
          <p>
            555-555-5555
            <br/>
            contact@littlelemon.com
            <br/>
            123 Main st, Chicage, IL 12345
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Footer