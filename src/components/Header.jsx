import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Ratio from 'react-bootstrap/Ratio';

const Header = ({ head, description }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid id="home" className="bg-light my-6 mt-0">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg="6" className="py-6 pb-0 pt-lg-0">
              <h3 className="text-primary mb-3">I'm</h3>
              <h1 className="display-3 mb-3">{head}</h1>
              <h2 className="typed-text-output d-inline">
                <span className="visually-hidden">Bilingual, friendly, curious, happy</span>
              </h2>
              <div className="typed-text d-none">{description}</div>
              <div className="d-flex align-items-center pt-5">
                <Button href="https://www.amazon.com/Abby-makes-friend-beach-Abeja/dp/B0CH2FX59P/" className="btn btn-primary py-3 px-4 me-3" title="Buy 'Abby the Bee Makes a Friend at the Beach' on Amazon">Amazon</Button>
                <Button href="https://www.barnesandnoble.com/w/abby-the-bee-makes-a-friend-at-the-beach-alexander-bell/1144052422?ean=9798859869893" className="btn btn-primary py-3 px-4 me-3" title="Buy 'Abby the Bee Makes a Friend at the Beach' at Barnes &amp; Noble">Barnes &amp; Noble</Button>
                {/* <button type="button" className="btn-play" data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/bY9IX7lHvs8" onClick={() => handleShow(true)}>
                  <span></span>
                </button>
                <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5> */}
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
            <span className="visually-hidden">Close</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Ratio aspectRatio="16x9">
            <iframe id="video" className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&amp;modestbranding=1&amp;showinfo=0"  frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="modal video"></iframe>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Header
