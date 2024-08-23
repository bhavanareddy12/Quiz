import Modal from "react-bootstrap/Modal";

function ConfirmationModel({ show, handleClose }) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Body>
            <strong>Please answer all questions</strong>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default ConfirmationModel;
