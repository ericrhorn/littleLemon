import {React, useState} from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Alert, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import BookingPage from "./BookingPage";



const Confirmation = (props) => {

  const 
  {
    dinerData,
    setDinerData,
    diner,
    setDiner,
  
  } = props;
console.log('diner date confirm', dinerData)

const [validated, setValidated] = useState(false);
const [showAlert, setShowAlert] = useState(false)
const navigate = useNavigate()




    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Validation succeeded, you can submit the form or perform any other action here.
        console.log('form submited', diner)
        console.log('diner data form', dinerData)
        // setDinerData([...dinerData, diner])
        // setIsSubmitted(true)
        // setDiner({
        //   firstName: '',
        //   lastName: '',
        //   email: '',
        //   phoneNumber: '',
        //   date: '',
        //   time: '',
        //   guests: '',
        //   occasion: '',
        //   location: '',
        //   comment: ''
        // })
      console.log('reservation confirmed')
      setShowAlert(true)
    }
    setValidated(true)
  };

  const closeAlert = () => {
    setShowAlert(false)
    navigate('/')
    window.location.reload(false);
  }



  // Function to format a date object as "Month Day"
  const formatDate = (date) => {
    return date.toLocaleString('en-US', { month: 'long', day: 'numeric' });
  };

  // Function to format a time string as "hh:mm AM/PM"
  const formatTime = (time) => {
    return new Date('1970-01-01T' + time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

    const alertStyle = {
    position: "fixed",
  };


  return (
    <>
      <Container style={{color: 'white'}}>
        <Row>
          <Form className="justify-content-center" noValidate validated={validated} onSubmit={handleSubmit} id='res-submit'>

            <Col className="mb-2 px-2" md={3}>

              <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                <Form.Control required size="lg" type="text"  id='firstName' name="firstName" >
                </Form.Control>
                <Form.Control.Feedback className="error" type="invalid">Please enter a first name</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control required id='email' type='text' name="email" size="lg">
                </Form.Control>
                  <Form.Control.Feedback className="error" type="invalid">Please enter a email address</Form.Control.Feedback>
              </Form.Group> 
              <div style={{paddingTop: '15px'}}>
              {
                dinerData && dinerData.length > 0 ?
                dinerData.map((d, idx) => (
                  <Row key={idx}>
                    <Col>
                    <div style={{paddingTop: '15px'}}>
                      <h5>{formatDate(new Date(d.date))}</h5>
                    </div>
                    <div style={{paddingTop: '15px'}}>
                      <h5>{formatTime(d.time)}</h5>
                    </div>
                    </Col>
                    <Col>
                    <div style={{paddingTop: '15px'}}>
                      <h5>{d.guests} Diners</h5>
                    </div>
                    <div style={{paddingTop: '15px'}}>
                      <h5>{d.occasion}</h5>
                    </div>
                    </Col>
                    <div style={{textAlign: 'center', paddingTop:'15px'}}>
                      <h5>{d.location}</h5>
                    </div>
                    <div>
                      <Form.Check
                        required
                        type="checkbox"
                        label='I agree to out private policy'>
                      </Form.Check>
                    </div>
                  </Row>
                )):
                null
              }
              </div>



            </Col>

            <Col className="mb-2 px-2" md={3}>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required id='lastName' type='text' name="lastName" size="lg">
                </Form.Control>
                  <Form.Control.Feedback className="error" type="invalid">Please enter a last name</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required id='phoneNumber' type='text' name="phoneNumber" size="lg">
                </Form.Control>
                  <Form.Control.Feedback className="error" type="invalid">Please enter a phone number</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Special Requests</Form.Label>
                <Form.Control id='comments' as='textarea' name="comments" rows={4} placeholder="Comments">
                </Form.Control>
                  {/* <Form.Control.Feedback className="error" type="invalid"></Form.Control.Feedback> */}
              </Form.Group>
            </Col>

        </Form>


          <Form.Group as={Row} className="text-center" style={{marginLeft: '1px'}}>
            <Col>
              <Button type="submit" form='res-submit' className='res-button'>Reserve a Table</Button>
            </Col>
          </Form.Group>
        </Row>
      </Container>
      <Alert show={showAlert} varient='success' style={alertStyle}>
      <Alert.Heading>Reservation Booked Successfully!</Alert.Heading>
        <p>Thank you for booking with Little Lemon</p>
        <p>See you soon!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={closeAlert}
            variant="outline-success"
          >
            Close
          </Button>
        </div>
      </Alert>
    </>
  )
}

export default Confirmation;