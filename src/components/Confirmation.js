import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Textarea } from "@chakra-ui/react";


const Confirmation = (props) => {

const {dinerData} = props;
console.log('diner date confirm', dinerData)














  return (
    <>
          <Container style={{color: 'white'}}>
        <Row>
          <Form className="justify-content-center" noValidate id='res-submit'>

            <Col className="mb-2 px-2" md={3}>

              <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                <Form.Control required size="lg" type="text"  id='date' name="date" >
                </Form.Control>
                <Form.Control.Feedback className="error" type="invalid">Please choose a Date.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Occasion</Form.Label>
                <Form.Control required id='occasion' type='text' name="occasion" size="lg">
                </Form.Control>
                  <Form.Control.Feedback className="error" type="invalid">Please choose a Date.</Form.Control.Feedback>
              </Form.Group>

              {
                dinerData && dinerData.length > 0 ?
                dinerData.map((d, idx) => (
                  <Row key={idx}>
                    <Col>
                      <h5>{d.date}</h5>
                      <h5>{d.time}</h5>
                    </Col>
                    <Col>
                      <h5>{d.guests} diners</h5>
                      <h5>{d.occasion}</h5>
                    </Col>
                    <div style={{textAlign: 'center'}}>
                      <h5>Outdoor Seating</h5>
                    </div>
                    <div style={{textAlign: 'center'}}>
                      <p>I agree to out private polocy</p>
                    </div>
                  </Row>
                )):
                null
              }


            </Col>

            <Col className="mb-2 px-2" md={3}>

              <Form.Group className="mb-3">
                <Form.Label>Occasion</Form.Label>
                <Form.Control required id='occasion' type='text' name="occasion" size="lg">
                </Form.Control>
                  <Form.Control.Feedback className="error" type="invalid">Please choose a Date.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Occasion</Form.Label>
                <Form.Control required id='occasion' type='text' name="occasion" size="lg">
                </Form.Control>
                  <Form.Control.Feedback className="error" type="invalid">Please choose a Date.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Occasion</Form.Label>
                <Form.Control required id='occasion' as='textarea' name="occasion" size="lg">
                </Form.Control>
                  <Form.Control.Feedback className="error" type="invalid">Please choose a Date.</Form.Control.Feedback>
              </Form.Group>
            </Col>

        </Form>


          <Form.Group as={Row} className="text-center">
            <Col>
              <Button type="submit" form='res-submit' className='res-button'>Reserve a Table</Button>
            </Col>
          </Form.Group>
        </Row>
      </Container>



    </>
  )
}

export default Confirmation;