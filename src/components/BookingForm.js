import React from 'react'
import { useEffect, useState } from "react";
import '../style/form.css'


const BookingForm = (props) => {

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

  const [formErrors, setFormErrors] = useState({})

  const validateForm = () => {
    const errors = {};
    if (!diner.firstName.trim()){
      errors.firstName = 'A first name is required';
    } else if (diner.firstName.length < 2){
      errors.firstName = 'A first name must be longer than 2 characters';
    }
    if (!diner.lastName.trim()){
      errors.lastName = 'A last name is required';
    } else if (diner.lastName.length < 2){
      errors.lastName = 'A first name must be longer than 2 characters';
    }
    if (!diner.email.trim()){
      errors.email = 'An email is required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(diner.email)) {
      errors.email = 'Please enter a valid email';
    }
     if (!diner.phoneNumber){
      errors.phoneNumber = 'A phone number is required';
    } else if (diner.phoneNumber.length < 2 || diner.phoneNumber.length > 10){
      errors.phoneNumber = 'Please enter a valid 10 digit phone number';
    }
    if (!diner.date){
      errors.date = 'A date is required';
    }
    if (!diner.time){
      errors.time = 'A time is required';
    }
    if (!diner.guests){
      errors.guests = 'Number of guests are required';
    }
    return errors
  }

  // passing props to app.js
  console.log('props', props)
  // destructure props so I dont have to use props.dinerData
  const {dinerData, setDinerData} = props;

  const {isSubmitted, setIsSubmitted} = props;
  console.log('form submitted?', isSubmitted)

  const {percent, setPercent} = props;
  console.log('percent', percent)


  // const numberOfGuests = [
  //   {value: 'null', text : 'Number of Guests'},
  //   {value: '2', text : '2'},
  //   {value: '3', text : '3'},
  //   {value: '4', text : '4'},
  //   {value: '5', text : '5'},
  //   {value: '6', text : '6'},
  //   {value: '7', text : '7'},
  //   {value: '8', text : '8'},
  //   {value: '9', text : '9'},
  //   {value: '10', text : '10'},
  // ]

   const [numberOfGuests, setNumberOfGuests] = useState ([
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
  ])

  // const reservationTime = [
  //   {value: 'null', text: 'Time'},
  //   {value: '10:00 am', text: '10:00am'},
  //   {value: '11:00 am', text: '11:00am'},
  //   {value: '12:00 am', text: '12:00am'},
  //   {value: '1:00 pm', text: '1:00pm'},
  //   {value: '2:00 pm', text: '2:00pm'},
  //   {value: '3:00 pm', text: '3:00pm'},
  //   {value: '4:00 pm', text: '4:00pm'},
  //   {value: '5:00 pm', text: '5:00pm'},
  //   {value: '6:00 pm', text: '6:00pm'},
  //   {value: '7:00 pm', text: '7:00pm'},
  //   {value: '8:00 pm', text: '8:00pm'},
  //   {value: '9:00 pm', text: '9:00pm'},
  // ]


  const [reservationTime, setReservationTime] = useState ([
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
  ])


    const [occasionType, setOccasionType] = useState ([
    {value: 'null', text: 'Occasion'},
    {value: 'Just Dinner', text: 'Just Dinner'},
    {value: 'Anniversary', text: 'Anniversary'},
    {value: 'Birthday', text: 'Birthday'},
  ])



  const submitHandler = (e) => {
    setDiner({
      ...diner,
      [e.target.name] : e.target.value,
    })
    console.log(diner)
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
    const errors = validateForm();
    setFormErrors(errors)
    if (Object.keys(errors).length === 0){
      console.log('form submited', diner)
      console.log('diner data form', dinerData)
      setDinerData([...dinerData, diner])
      setIsSubmitted(true)
      setPercent(50)
      console.log('is submitted?????', isSubmitted)
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
    console.log('form error', errors)
  }



  return (
    <>
      <div style={{marginTop: '50px'}}className='form-title' noValidate>
        <h4>Please Complete the reservation form</h4>
      </div>
      <form onSubmit={formSubmitHandler} id='res-submit'>
        <div className="one">
          <p>Diner Information</p>
          {/* {formErrors.firstName && <div className='err'>{formErrors.firstName}</div>} */}
          <label htmlFor='firstName'>First Name</label>
          <input 
            type="text" 
            id='firstName'
            name="firstName" 
            value={diner.firstName} 
            onChange={submitHandler}
          />
          {formErrors.firstName && <div className='err'>{formErrors.firstName}</div>}
          {/* {formErrors.lastName && <div className='err'>{formErrors.lastName}</div>} */}
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type="text" 
            id='lastName'
            name="lastName" 
            value={diner.lastName}
            onChange={submitHandler}
            />
          {formErrors.lastName && <div className='err'>{formErrors.lastName}</div>}
          {/* {formErrors.email && <div className='err'>{formErrors.email}</div>} */}
          <label htmlFor='email'>Email</label>
          <input 
            type="text" 
            id='email'
            name="email" 
            value={diner.email}
            onChange={submitHandler}
            />
          {formErrors.email && <div className='err'>{formErrors.email}</div>}
          {/* {formErrors.phoneNumber && <div className='err'>{formErrors.phoneNumber}</div>} */}
          <label htmlFor='phoneNumber'>Phone Numner</label>
          <input 
            type="tel" 
            id='phoneNumber'
            name="phoneNumber" 
            placeholder="(000) 000-0000"
            value={diner.phoneNumber}
            onChange={submitHandler}
            />
        {formErrors.phoneNumber && <div className='err'>{formErrors.phoneNumber}</div>}
        </div>
        <div className="two">
          <p>Reservation Information</p>
          {/* {formErrors.date && <div className='err'>{formErrors.date}</div>} */}
          <label htmlFor='date'>Date</label>
          <input 
            type="date" 
            id='date'
            name="date" 
            value={diner.date}
            onChange={submitHandler}
            />
          {formErrors.date && <div className='err'>{formErrors.date}</div>}
          {/* {formErrors.time && <div className='err'>{formErrors.time}</div>} */}
          <label htmlFor='time'>Reservation Time</label>
          <select id='time' name="time" value={diner.time} onChange={submitHandler}>
            {reservationTime.map(idx=>
                <option key={idx.value} value={idx.value}>{idx.text}</option>
              )}
          </select>
          {formErrors.time && <div className='err'>{formErrors.time}</div>}
          {/* {formErrors.guests && <div className='err'>{formErrors.guests}</div>} */}
          <label htmlFor='guests'>Number of Guests</label>
          <select id='guests' name="guests" value={diner.guests} onChange={submitHandler}>
            {numberOfGuests.map(index=>
                <option key={index.value} value={index.value}>{index.text}</option>
              )}
          </select>
          {formErrors.guests && <div className='err'>{formErrors.guests}</div>}
          <label htmlFor='occasion'>Occasion</label>
          <select id='occasion' name="occasion" value={diner.occasion} onChange={submitHandler}>
                {occasionType.map(indx=>
                <option key={indx.value} value={indx.value}>{indx.text}</option>
              )}
          </select>
        </div>
      </form>
      <div className='res-button' >
        <div className="progress-container">
      </div>
      <button type="submit" form='res-submit'>Make Reservation</button>
      </div>
    </>
  )
}

export default BookingForm