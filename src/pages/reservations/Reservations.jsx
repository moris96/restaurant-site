import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Reservations.css';

const Reservations = () => {
  return (
    <Container className='reservations-container'>
      <div className='reservations-header text-center'>
        <h1>Reservations</h1>
        <p>Make a reservation</p>
      </div>

      <div className='reservations-form'>
        <Form>
          <Form.Group controlId='name'>
            <Form.Label>Name:</Form.Label>
            <Form.Control type='text' placeholder='Enter name' required />
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' placeholder='Enter email' required />
          </Form.Group>

          <Form.Group controlId='phone'>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type='tel' placeholder='Enter phone number' required />
          </Form.Group>

          <Form.Group controlId='date'>
            <Form.Label>Date:</Form.Label>
            <Form.Control type='date' required />
          </Form.Group>

          <Form.Group controlId='time'>
            <Form.Label>Time:</Form.Label>
            <Form.Control type='time' required />
          </Form.Group>

          <Form.Group controlId='guests'>
            <Form.Label>Number of guests:</Form.Label>
            <Form.Control type='number' required />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit Reservation 
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Reservations
