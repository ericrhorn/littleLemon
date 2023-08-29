import React from "react";

const Confirmation = (props) => {

const {dinerData} = props;
console.log('diner date confirm', dinerData)


  return (
    <>
    <div style={{marginTop: '50px', borderBottom:'1px solid black', width:'80%'}}className='form-title' noValidate>
        <h2>Your Reservation is Confirmed!
          <br/>
          See you soon</h2>
    </div>
      {
        dinerData && dinerData.length > 0 ?
        dinerData.map((d, idx) => (
          <div key={idx}>
              <form id='res-submit'>
                <div className="one">
                  <h4>Diner Information</h4>
                    <h5>{d.firstName} {d.lastName}</h5>
                    <h5>{d.email}</h5>
                    <h5>{d.phoneNumber}</h5>
                </div>
                <div className="two">
                  <h4>Reservation Information</h4>
                    <h5>{d.date} at {d.time}</h5>
                    <h5>{d.guests} dinners</h5>
                    <h5>{d.occasion}</h5>
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