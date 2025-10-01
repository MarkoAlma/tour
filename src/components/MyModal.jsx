import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const MyModal = ({info, image, price, modal, setModal}) => {

  const toggle = () => setModal(!modal);

  return (
    <div>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <img src={image} className='img-fluid' alt="" />
          {info}
        </ModalBody>
      </Modal>
    </div>
  )
}

export default MyModal
