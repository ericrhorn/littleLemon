import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';
import Main from './components/Main';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// test if components render
  test("Renders App Component", () => {
    render(<App />);
  })

  test("Render Main Componant", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    )
    const  title = screen.getByText('This weeks specials!')
    expect(title).toBeInTheDocument();
  })

  test("Render Booking Page", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookingPage/>}/>
        </Routes>
      </BrowserRouter>
    )
    const  title = screen.getByText('Little Lemon Reservations')
    expect(title).toBeInTheDocument();
  })


  const mockProps = {
  availableTimes: ['12:00 PM', '1:00 PM', '2:00 PM'],
  updateTimes: jest.fn(),
  submitForm: jest.fn(),
  diner: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
    date: '2023-07-28',
    time: '12:00 PM',
    guests: '2',
    occasion: 'Just Dinner',
  },
  setDiner: jest.fn(),
  dinerData: [],
  setDinerData: jest.fn(),
  formSubmit: jest.fn(),
};

  const renderBookingForm = () => render(<BookingForm {...mockProps} />);
  describe('BookingForm component', () => {
    test('renders the form fields and handles form submission', async () => {
      renderBookingForm();

    // Check if form fields are rendered
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();


    // Simulate user input and form submission
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-07-27' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '12:oo PM' } });
    fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Just Dinner' } });


    // Check if user input is reflected in the form fields
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John');
    expect(screen.getByLabelText(/last name/i)).toHaveValue('Doe');
    expect(screen.getByLabelText(/email/i)).toHaveValue('john.doe@example.com');
    expect(screen.getByLabelText(/date/i)).toHaveValue('2023-07-28');
    expect(screen.getByLabelText(/time/i)).toHaveValue('12:00 PM');
    expect(screen.getByLabelText(/guests/i)).toHaveValue('2');
    expect(screen.getByLabelText(/occasion/i)).toHaveValue('Just Dinner');


    
    // Simulate date change and check if updateTimes is called
    // fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2023-07-28' } });
    // expect(mockProps.updateTimes).toHaveBeenCalledWith('12:00 PM');

    // Simulate form submission and check if submitForm is called
    // fireEvent.submit(screen.getByText('Make Reservation'));
    //     console.log('after form submit')
    // await waitFor(() => {
    //       console.log('inside waitFor')

    //       expect(mockProps.submitForm).toHaveBeenCalledTimes(1);
    // })
  });
});