import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

const Header = ({ head, description }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid id="home" className="bg-light my-6 mt-0">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg="6" className="py-6 pb-0 pt-lg-0">
              <h3 class="text-primary mb-3">I'm</h3>
              <h1 class="display-3 mb-3">{head}</h1>
              <h2 class="typed-text-output d-inline">{description}</h2>
              <div class="typed-text d-none">Bilingual, Friendly, Curious, Good Student, Happy</div>
              <div class="d-flex align-items-center pt-5">
                <Button href="https://www.amazon.com/Abby-Stays-Home-Stop-Pandemic/dp/B088LKDK8W" className="btn btn-primary py-3 px-4 me-5">Buy Book Now</Button>
                <button type="button" class="btn-play" data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" onClick={() => handleShow(true)}>
                  <span></span>
                </button>
                <h5 class="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
              </div>
            </Col>
            <Col lg="6">
              <Image fluid src="/web_main_abby_pic_02.png" alt="Abby the Bee"/>
            </Col>
          </Row>
        </Container>
      </Container>

      <Modal id="videoModal" className="modal-video" show={show} onHide={handleClose}
        aria-labelledby="exampleModalLabel"
        centered contentClassName="rounded-0">
        <Modal.Header>
          <Modal.Title id="exampleModalLabel">YouTube Video</Modal.Title>
          <Button variant="close" onClick={handleClose} aria-label="Close">
            <span class="visually-hidden">Close</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div class="ratio ratio-16x9">
            <iframe id="video" class="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ"  frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="modal video"></iframe>
          </div>
        </Modal.Body>
      </Modal>      
    </div>
  )
}

export default Header
