import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const VideoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Modal id="videoModal" className="modal-video" show={show} onHide={handleClose}
    aria-labelledby="exampleModalLabel" centered contentClassName="rounded-0">
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
  )
}

export default VideoModal
