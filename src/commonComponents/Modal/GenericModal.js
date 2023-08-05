import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import Button from "../Button/GenericButton";

const GenericModal = ({
  show,
  title,
  body,
  onHide,
  closeButtonLabel,
  confirmButtonLabel,
  onConfirm,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {closeButtonLabel}
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          {confirmButtonLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

GenericModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  onHide: PropTypes.func.isRequired,
  closeButtonLabel: PropTypes.string,
  confirmButtonLabel: PropTypes.string,
  onConfirm: PropTypes.func,
};

GenericModal.defaultProps = {
  closeButtonLabel: "Close",
  confirmButtonLabel: "Confirm",
  onConfirm: () => {},
};

export default GenericModal;
