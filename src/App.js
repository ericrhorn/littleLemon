import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
      {/* <Header/> */}
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
