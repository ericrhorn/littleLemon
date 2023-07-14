import '../style/style.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reservations = () => {

  const submitHandler = () => {

  }

  return (
    <>
     <div className="color1">
        <h1>Little Lemon Reservations</h1>
      </div>
    <div class="container">
    <div class="main">
      <div class="main-content">
        <form onSubmit={submitHandler}>
          <div class="one">
            <h4>Please complete the form </h4>
            <label>First Name</label>
            <input type="text" name="" id="" />
            <label>Last Name</label>
            <input type="text" name="" id="" />
            <label>Email</label>
            <input type="text" name="" id="" />
            <label>Phone Numner</label>
            <input type="text" name="" id="" />
          </div>
          <div class="two">
            <h4>Please complete the form </h4>
            <label>First Name</label>
            <input type="text" name="" id="" />
            <label>Last Name</label>
            <input type="text" name="" id="" />
            <label>Email</label>
            <input type="text" name="" id="" />
            <label>Phone Numner</label>
            <input type="text" name="" id="" />
          </div>
        </form>
      </div>
        <div className='res-button'>
          <button>Make Reservation</button>
        </div>
        <div>
          <ProgressBar animated now={20} />
          <h1>Hello???</h1>
        </div>
    </div>
  </div>
      {/* <div className="res-container">
        <div className="color1">
          <h1>Little Lemon Reservations</h1>
        </div>
        
          <div className='res-form'>
            <form onSubmit={submitHandler}>
              <div className="user-info">
                <h4>Please complete the form </h4>
                <label>First Name</label>
                <input type="text" name="" id="" />
                <label>Last Name</label>
                <input type="text" name="" id="" />
                <label>Email</label>
                <input type="text" name="" id="" />
                <label>Phone Numner</label>
                <input type="text" name="" id="" />
              </div>
              <div className="res-info">
                <h4>Please complete the form </h4>
                <label>First Name</label>
                <input type="text" name="" id="" />
                <label>Last Name</label>
                <input type="text" name="" id="" />
                <label>Email</label>
                <input type="text" name="" id="" />
                <label>Phone Numner</label>
                <input type="text" name="" id="" />
              </div>
              <div className='res-button'>
                <button>Make Reservation</button>
              </div>
            </form>
          </div>
        
      </div> */}
      {/* <div className="test-container">
        <h1>Hello</h1>
        <div className="test-color">

        </div>
          <div className="test-form">

            <div className="form1">
              <p>form1</p>
                <label>First Name</label>
                <input type="text" name="" id="" />
                <label>Last Name</label>
                <input type="text" name="" id="" />
                <label>Email</label>
                <input type="text" name="" id="" />
                <label>Phone Numner</label>
                <input type="text" name="" id="" />
            </div>

            <div className="form2">
              <p>form2</p>
                <label>First Name</label>
                <input type="text" name="" id="" />
                <label>Last Name</label>
                <input type="text" name="" id="" />
                <label>Email</label>
                <input type="text" name="" id="" />
                <label>Phone Numner</label>
                <input type="text" name="" id="" />
            </div>
              <div className='res-button'>
                <button>Make Reservation</button>
              </div>
          </div>
          
      </div> */}
      
    </>
  )
}

export default Reservations;