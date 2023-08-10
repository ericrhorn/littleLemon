import { fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';
import BookingForm from './components/BookingForm';




// const renderBookingForm = () => render(<BookingForm diner={ firstName: ''} />);
// describe('BookingForm component', () => {
//   test('renders the form fields and handles form submission', () => {
//     renderBookingForm();

//      // Check if form fields are rendered
//     const firstNameLabel = screen.getByLabelText(/First Name/i);
//     expect(firstNameLabel).toBeInTheDocument();

//     // Now you can target the input field using the "for" attribute of the label
//     const firstNameInput = screen.getByLabelText(/First Name/i, { selector: 'input' });
//     user.type(firstNameInput, 'joe');
//   });
// });