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

test:


const mockProps = {
  availableTimes: ['12:00 PM', '1:00 PM', '2:00 PM'],
  updateTimes: jest.fn(),
  submitForm: jest.fn(),
  diner: {
    firstName: 'John', // Replace with an appropriate value
    lastName: 'Doe', // Replace with an appropriate value
    email: 'john.doe@example.com', // Replace with an appropriate value
    phoneNumber: '1234567890', // Replace with an appropriate value
    date: '2023-07-28', // Replace with an appropriate value
    time: '12:00 PM', // Replace with an appropriate value
    guests: '2', // Replace with an appropriate value
    occasion: 'Just Dinner', // Replace with an appropriate value
  },
  setDiner: jest.fn(),
  dinerData: [],
  setDinerData: jest.fn(),
};

// Helper function to render the BookingForm component with mocked props
const renderBookingForm = () => render(<BookingForm {...mockProps} />);
describe('BookingForm component', () => {
  test('renders the form fields and handles form submission', () => {
    renderBookingForm();
    // const { getByLabelText, getByTestId, getByText } = renderBookingForm();
    // const firstName = screen.getAllByLabelText

    // Check if form fields are rendered
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    // Add more expect statements for other form fields as needed

    // Simulate user input and form submission
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-07-27' } });
    // Add more fireEvent.change for other form fields as needed

    // Check if user input is reflected in the form fields
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John');
    expect(screen.getByLabelText(/last name/i)).toHaveValue('Doe');
    expect(screen.getByLabelText(/email/i)).toHaveValue('john.doe@example.com');
    expect(screen.getByLabelText(/date/i)).toHaveValue('2023-07-28');
    // Add more expect statements for other form fields as needed

    // Simulate date change and check if updateTimes is called
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-07-28' } });
    // expect(mockProps.updateTimes).toHaveBeenCalledWith('12:00 PM');

    // Simulate form submission and check if submitForm is called
    fireEvent.submit(screen.getByTestId('res-submit'));
    expect(mockProps.submitForm).toHaveBeenCalledTimes(1);
  });
});


  test("Renders App Component", () => {
    render(<App />);
    // const  title = screen.getByText(/Please Complete the reservation form/)
    // expect(title).toBeInTheDocument();
  })

  // test("Renders Booking Form", () => {
  //   render(<BookingForm />);
    // const  title = screen.getByText(/Please Complete the reservation form/)
    // expect(title).toBeInTheDocument();




// describe("Booking Form", () => {
//   test("Form is sucessfully submitted", () => {
//     const formSubmitHandler = jest.fn();
//     render(<BookingForm onSubmit={formSubmitHandler}/>);

//     const textInput 
//   })
// })







// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
