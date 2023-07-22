import React from "react";

const Confirmation = (props) => {

const {dinerData, setDinerData} = props;
console.log('diner date confirm', dinerData)


  return (
    <>
    <div style={{marginTop: '50px'}}className='form-title' noValidate>
        <h4>Please enter CC info to confirmation reservation</h4>
    </div>
      {
        dinerData && dinerData.length > 0 ?
        dinerData.map((d, idx) => (
          <div key={idx}>
              <form id='res-submit'>
                <div className="one">
                  <p><strong>Diner Information</strong></p>
                    <p>first name: {d.firstName}</p>
                    <p>last name: {d.lastName}</p>
                    <p>email name: {d.email}</p>
                    <p>phone number: {d.phoneNumber}</p>
                </div>
                <div className="two">
                  <p><strong>Reservation Information</strong></p>
                    <p>date: {d.date}</p>
                    <p>time: {d.time}</p>
                    <p>guests: {d.guests}</p>
                    <p>occasion: {d.occasion}</p>
                </div>
              </form>

          </div>
        )):
        null
      }
      <div>
        <h2>Credit Card Info</h2>
      </div>
      <div>
        <button>Submit CC info</button>
      </div>
    </>
  )
}

export default Confirmation;