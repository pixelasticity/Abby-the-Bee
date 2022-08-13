import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div class="spinner-border text-primary" style={{width: 3 + 'rem', height: 3 + 'rem'}} role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>

      <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="/" className="navbar-brand d-block d-lg-none">
          <h1 class="text-primary fw-bold m-0">Abby the Bee</h1>
        </Link>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
          <Nav className="navbar-nav ms-auto py-0">
            <Link to="#home" className="nav-item nav-link active">Home</Link>
            <Link to="#about" className="nav-item nav-link">About Abby</Link>
            <Link to="#project" className="nav-item nav-link">Abby-wear</Link>
          </Nav>
          <Link to="/" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
            <h1 class="text-primary fw-bold m-0">Abby</h1>
          </Link>
          <Nav className="navbar-nav me-auto py-0">
            <a href="#team" class="nav-item nav-link">Author</a>
            <a href="#testimonial" class="nav-item nav-link">Testimonial</a>
            <a href="#contact" class="nav-item nav-link">Contact</a>
          </Nav>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
