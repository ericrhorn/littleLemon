import { useEffect, useReducer, useState } from "react";
import {useNavigate} from 'react-router-dom'
import '../style/style.css';

// import background from '../assets/restaurant.jpg'
// import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confirmation from "./Confirmation";
import BookingForm from "./BookingForm";

import { fetchAPI, submitAPI } from "../BookingApi";

const BookingPage = (props) => {

  const [diner, setDiner] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    date: 'null',
    time: '',
    guests: '',
    occasion: '',
    location: '',
    comment: ''
  })

  //   const [formErrors, setFormErrors] = useState({})

  // const validateForm = () => {
  //   const errors = {};
  //   if (!diner.firstName.trim()){
  //     errors.firstName = 'A first name is required';
  //   } else if (diner.firstName.length < 2){
  //     errors.firstName = 'A first name must be longer than 2 characters';
  //   }
  //   if (!diner.lastName.trim()){
  //     errors.lastName = 'A last name is required';
  //   } else if (diner.lastName.length < 2){
  //     errors.lastName = 'A first name must be longer than 2 characters';
  //   }
  //   if (!diner.email.trim()){
  //     errors.email = 'An email is required'
  //   }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(diner.email)) {
  //     errors.email = 'Please enter a valid email';
  //   }
  //    if (!diner.phoneNumber){
  //     errors.phoneNumber = 'A phone number is required';
  //   } else if (diner.phoneNumber.length < 2 || diner.phoneNumber.length > 10){
  //     errors.phoneNumber = 'Please enter a valid 10 digit phone number';
  //   }
  //   if (!diner.date){
  //     errors.date = 'A date is required';
  //   }
  //   if (!diner.time){
  //     errors.time = 'A time is required';
  //   }
  //   if (!diner.guests){
  //     errors.guests = 'Number of guests are required';
  //   }
  //   if (!diner.occasion){
  //     errors.occasion = 'Please select an occation';
  //   }
  //   return errors
  // }

  // const [errors] = useState(validateForm());






    const updateTimes = (state, action) => {
    state = fetchAPI(new Date(action))
    return state
    }

    const initializeTimes = initialTimes =>
    initialTimes = fetchAPI(new Date())

    const [availableTimes, dispatch]  = useReducer(updateTimes, [], initializeTimes)

    const navigate = useNavigate()
    const submitForm = ( formData ) => {
      const response = submitAPI(formData)
      // submitAPI(formData)
      if(response) navigate("/reservations")
        console.log('form submitted ')
    }



    // const [percent, setPercent] = useState(0)
    // const [isSubmitted, setIsSubmitted] = useState(false)
    // console.log('updated percent', percent)

    const [isSubmitted, setIsSubmitted] = useState(false)
    console.log('form submitted?', isSubmitted)


  // const {reservationTime,setReservationTime} = props;

    const {dinerData, setDinerData} = props;
    // console.log('diner data booking', dinerData)

    //use in a button
  // const progress = () => {
  //   setPercent(percent + 50)
  // }

  // const [showPercent, setShowPercent] = useState(percent);

  // useEffect(() => {
  //   setShowPercent(showPercent)
  // }, [showPercent])


  return (
    <>
    <main className="container">
      <div className="color1" style={{height: 'auto'}}>
        <div style={{paddingBottom: "25px"}}>
          <h1>Reservations</h1>
        </div>
      {/* </div> */}
        {/* <div className="container">
          <div className="main">
            <div className="main-content"> */}
              {
                isSubmitted ?
                  <Confirmation
                    dinerData={dinerData}
                    setDinerData={setDinerData}
                    // isSubmitted={isSubmitted}
                    // setIsSubmitted={setIsSubmitted}
                    diner={diner}
                    setDiner={setDiner}
                    submitForm={submitForm}
                  />
                  :
                  <BookingForm
                    isSubmitted={isSubmitted}
                    setIsSubmitted={setIsSubmitted}
                    dinerData={dinerData}
                    setDinerData={setDinerData}
                    // percent={percent}
                    // setPercent={setPercent}
                    // reservationTime={reservationTime}
                    // updateTimes={dispatch}
                    diner={diner}
                    setDiner={setDiner}
                    submitForm={submitForm}
                    availableTimes={availableTimes} updateTimes={dispatch}
                    // formErrors={formErrors}
                    // setFormErrors={setFormErrors}
                    // errors={errors}
                  />
                }
                </div>
            {/* </div>
        </div>
      </div> */}
    </main>
  </>
  )
}

export default BookingPage;