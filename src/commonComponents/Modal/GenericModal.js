import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import Button from "../Button/GenericButton";

const GenericModal = ({ show, title, body, onHide, onConfirm }) => {
  const handleOk = (e) => {
    if (onConfirm) {
      onConfirm(e);
      setTimeout(() => {}, 3000);
    }
    onHide();
  };

  const handleCancel = () => {
    onHide();
  };

  return (
    <Modal
      open={show}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button className="hidden" key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          className="hidden"
          key="submit"
          type="primary"
          onClick={handleOk}
        >
          Submit
        </Button>,
        <Button
          key="link"
          href="https://google.com"
          type="primary"
          className="hidden"
          onClick={handleOk}
        >
          Search on Google
        </Button>,
      ]}
    >
      {body}
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
  onConfirm: PropTypes.func.isRequired,
};

export default GenericModal;
