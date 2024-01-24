import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";
import Reservations from "./pages/reservations/Reservations";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/menu" element={ <Menu/> } />
          <Route path="/contact" element={ <Contact/> } />
          <Route path="/reservations" element={ <Reservations/> } />
          <Route path="*" element={ <h1>404 Not Found</h1> } />
        </Routes>
      </Container>
      <Footer/>
    </>
  );
};

export default App
