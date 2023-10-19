import { useState } from "react";
import '../style/form.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";


const BookingForm = (props) => {

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };





  const currentDate = new Date().toISOString().split('T')[0];

  const {
    availableTimes, 
    updateTimes, 
    submitForm, 
    diner, 
    setDiner, 
    dinerData, 
    setDinerData
  } = props

  const handleDateChange = (e) => {
        setDiner({...diner, date: e.target.value})
        updateTimes(e.target.value)
   }

  const submitHandler = (e) => {
    setDiner({
      ...diner,
      [e.target.name] : e.target.value,
    })
    console.log(diner)
  }


  const handleSubmit = (e) => {
      e.preventDefault()
      const errors = validateForm();
      setFormErrors(errors)
          if (Object.keys(errors).length === 0){
            console.log('form submited', diner)
            console.log('diner data form', dinerData)
            setDinerData([...dinerData, diner])
            setIsSubmitted(true)
            // setPercent(50)
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
          console.log(diner)
          submitForm(diner)
        }
  console.log('form error', errors)
}

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
    if (!diner.occasion){
      errors.occasion = 'Please select an occation';
    }
    return errors
  }

  const {isSubmitted, setIsSubmitted} = props;

   const [numberOfGuests] = useState ([
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

    const [occasionType] = useState ([
    {value: 'null', text: 'Occasion'},
    {value: 'Just Dinner', text: 'Just Dinner'},
    {value: 'Anniversary', text: 'Anniversary'},
    {value: 'Birthday', text: 'Birthday'},
  ])

  return (
    <>
      {/* <div className='form-title' noValidate>
        <h4>Please Complete the reservation form</h4>
      </div> */}
      <Container style={{color: 'white'}}>
        <Row>
          <Form className="justify-content-center">

            <Col className="mb-2 px-2" md={3}>
              <Form.Group className="mb-3">
                <Form.Check type="radio" aria-label="radio 1" label="Indoor Seating" style={{}}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
              <Form.Control size="lg" type="date" min={currentDate} id='date' name="date" value={diner.date || currentDate} onChange={handleDateChange}>
              </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Occasion</Form.Label>
                {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}
                <Form.Select size="lg" className="selection">
                  <option>Occation</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col className="mb-2 px-2" md={3}>
              <Form.Group className="mb-3">
                <Form.Check type="radio" aria-label="radio 1" label="Indoor Seating" style={{}}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Numner of Diners</Form.Label>
                <Form.Select size="lg" className="selection">
                <option>No Diners</option>
                </Form.Select>
                {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}
              <Form.Select size="lg" className="selection" id='time' name="time" value={diner.time} onChange={submitHandler}>
                  <option value="" disabled selected>
                    Select Time
                  </option>
                  {availableTimes.map((time) => {
                  return(
                      <option data-testid="availableTime" key={time} value={time}>{time}</option>
                    )
                  })}
              </Form.Select>
              </Form.Group>
            </Col>
        </Form>
          <Form.Group as={Row} className="text-center">
            <Col>
              <Button className='res-button' type="submit">Reserve a Table</Button>
            </Col>
          </Form.Group>
        </Row>
      </Container>


      {/* <form onSubmit={handleSubmit}  id='res-submit'>
        <div className="one">
          <p>Diner Information</p>
          <label htmlFor='firstName'>First Name</label>
          <input 
            label='firstName'
            type="text"
            id='firstName'
            name="firstName" 
            value={diner.firstName} 
            onChange={submitHandler}
          />
          {formErrors.firstName && <div className='err'>{formErrors.firstName}</div>}
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type="text" 
            id='lastName'
            name="lastName" 
            value={diner.lastName}
            onChange={submitHandler}
            />
          {formErrors.lastName && <div className='err'>{formErrors.lastName}</div>}
          <label htmlFor='email'>Email</label>
          <input 
            type="text" 
            id='email'
            name="email" 
            value={diner.email}
            onChange={submitHandler}
            />
          {formErrors.email && <div className='err'>{formErrors.email}</div>}
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
          <label htmlFor='date'>Date</label>
          <input 
            type="date" 
            min={currantDate}
            id='date'
            name="date" 
            value={diner.date}
            onChange={handleDateChange}
            />
          {formErrors.date && <div className='err'>{formErrors.date}</div>}
          <label htmlFor='time'>Reservation Time</label>
          <select id='time' name="time" value={diner.time} onChange={submitHandler}>
                   {availableTimes.map((time) => {
                    return(
                        <option data-testid="availableTime" key={time} value={time}>{time}</option>
                    )
                })}
          </select>
          {formErrors.time && <div className='err'>{formErrors.time}</div>}
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
        {formErrors.occasion && <div className='err'>{formErrors.occasion}</div>}
        </div>
      </form> */}
      {/* <div className='res-button' >
        <div className="progress-container">
      </div>
      <button type="submit" form='res-submit'>Make Reservation</button>
      </div> */}
    </>
  )
}

export default BookingForm