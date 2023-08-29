import React from "react";

const Confirmation = (props) => {

const {dinerData} = props;
console.log('diner date confirm', dinerData)


  return (
    <>
    <div style={{marginTop: '50px'}}className='form-title' noValidate>
        <h4>Your Reservation is Confirmed!
          <br/>
          See you soon</h4>
    </div>
      {
        dinerData && dinerData.length > 0 ?
        dinerData.map((d, idx) => (
          <div key={idx}>
              <form id='res-submit'>
                <div className="one">
                  <p><strong>Diner Information</strong></p>
                    <p>{d.firstName} {d.lastName}</p>
                    <p>{d.email}</p>
                    <p>{d.phoneNumber}</p>
                </div>
                <div className="two">
                  <p><strong>Reservation Information</strong></p>
                    <p>{d.date} at {d.time}</p>
                    <p>{d.guests} dinners</p>
                    <p>{d.occasion}</p>
                </div>
              </form>

          </div>
        )):
        null
      }
    </>
  )
}

export default Confirmation;