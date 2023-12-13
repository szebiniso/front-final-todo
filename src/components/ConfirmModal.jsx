import React, { useRef } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ConfirmModal({ modalIsOpen, setIsOpen }) {
  const subtitleRef = useRef();

  function afterOpenModal() {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src="https://media2.giphy.com/media/8xUapU951fWEgB93Yl/giphy.gif?cid=ecf05e47kyy0zdnxbsdj3capwdfn85ag89dcfz1868n8trul&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="/" />
      </Modal>
    </div>
  );
}

export default ConfirmModal;
