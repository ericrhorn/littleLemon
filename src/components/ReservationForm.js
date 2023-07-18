import React from 'react'
import { useEffect, useState } from "react";




const ReservationForm = (props) => {

   const [diner, setDiner] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  })

  // passing props to app.js
  console.log(props)
  // destructure props so I dont have to use props.dinerData
  const {dinerData, setDinerData} = props;

  // const [dinerData, setDinerData] = useState([])
      // const [isSubmitted, setIsSubmitted] = useState(false)
      const {isSubmitted, setIsSubmitted} = props;
      console.log(isSubmitted)

      const {percent, setPercent} = props;
      console.log(percent)


  const numberOfGuests = [
    {value: 'null', text : 'Number of Guests'},
    {value: '2', text : '2'},
    {value: '3', text : '3'},
    {value: '4', text : '4'},
    {value: '5', text : '5'},
    {value: '6', text : '6'},
    {value: '7', text : '7'},
    {value: '8', text : '8'},
    {value: '9', text : '9'},
    {value: '10', text : '10'},
  ]

  const reservationTime = [
    {value: 'null', text: 'Time'},
    {value: '10:00 am', text: '10:00am'},
    {value: '11:00 am', text: '11:00am'},
    {value: '12:00 am', text: '12:00am'},
    {value: '1:00 pm', text: '1:00pm'},
    {value: '2:00 pm', text: '2:00pm'},
    {value: '3:00 pm', text: '3:00pm'},
    {value: '4:00 pm', text: '4:00pm'},
    {value: '5:00 pm', text: '5:00pm'},
    {value: '6:00 pm', text: '6:00pm'},
    {value: '7:00 pm', text: '7:00pm'},
    {value: '8:00 pm', text: '8:00pm'},
    {value: '9:00 pm', text: '9:00pm'},
  ]



  const submitHandler = (e) => {
    setDiner({
      ...diner,
      [e.target.name] : e.target.value,
    })
    console.log(diner)
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
    console.log('form submited')
    console.log(diner)
    setDinerData([...dinerData, diner])
    setIsSubmitted(true)
    setPercent(50)
    console.log(isSubmitted)
    setDiner({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      guests: '',
      occasion: ''
    })

  }



  return (
    <>
      <div style={{marginTop: '50px'}}className='form-title' noValidate>
        <h4>Please Complete the reservation form</h4>
      </div>
      <form onSubmit={formSubmitHandler} id='res-submit'>
        <div className="one">
          <p>Diner Information</p>
          <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={diner.firstName} 
            onChange={submitHandler}
            required
          />
          <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value={diner.lastName}
            onChange={submitHandler}
            required
            />
          <label>Email</label>
          <input 
            type="text" 
            name="email" 
            value={diner.email}
            onChange={submitHandler}
            required
            />
          <label>Phone Numner</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            placeholder="(000) 000-0000"
            value={diner.phoneNumber}
            onChange={submitHandler}
            />
        </div>
        <div className="two">
          <p>Reservation Information</p>
          <label>Date</label>
          <input 
            type="date" 
            name="date" 
            value={diner.date}
            onChange={submitHandler}
            required
            />
          {/* <label>Time</label>
          <input 
            type="time" 
            name="time" 
            value={diner.time}
            onChange={submitHandler}
            required
            /> */}
          <label>Reservation Time</label>
          <select name="time" value={diner.time} onChange={submitHandler} required>
            {reservationTime.map(idx=>
                <option key={idx.value} value={idx.value}>{idx.text}</option>
              )}
          </select>
          <label>Number of Guests</label>
          <select name="guests" value={diner.guests} onChange={submitHandler} required>
            {numberOfGuests.map(index=>
                <option key={index.value} value={index.value}>{index.text}</option>
              )}
          </select>
          <label>Occasion</label>
          <select name="occasion" value={diner.occasion} onChange={submitHandler} required>
                <option>Birthday</option>
                <option>Anniversary</option>
          </select>
        </div>
      </form>
      <div className='res-button' >
        <div className="progress-container">
      </div>
      {/* <button type="submit" onClick={progress} form='res-submit'>Make Reservation</button> */}
      <button type="submit" form='res-submit'>Make Reservation</button>
      {/* <button type="submit">Make Reservation</button> */}
      </div>
    </>
  )
}

export default ReservationForm