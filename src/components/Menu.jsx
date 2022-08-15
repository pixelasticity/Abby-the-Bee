import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar id="navbar" fixed="top" bg="white" variant="light" expand="lg" className="shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <Navbar.Brand href="/" className="d-block d-lg-none">
        <h1 class="text-primary fw-bold m-0">Abby the Bee</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse" className="justify-content-between py-4 py-lg-0">
        <Nav className="ms-auto py-0">
          <Nav.Link href="#home" className="nav-item active">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-item">About Abby</Nav.Link>
          <Nav.Link href="#project" className="nav-item">Abby-wear</Nav.Link>
        </Nav>
        <Navbar.Brand href="/" className="bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
          <h1 class="text-primary fw-bold m-0">Abby</h1>
        </Navbar.Brand>
        <Nav className="me-auto py-0">
          <Nav.Link href="#team">Author</Nav.Link>
          <Nav.Link href="#testimonial">Testimonial</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
