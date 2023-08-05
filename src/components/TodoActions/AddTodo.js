import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import Button from "../../commonComponents/Button/GenericButton";
import { Modal } from "antd";
import Form from "../../commonComponents/Form/GenericForm";

const AddTodo = () => {
  const [modal2Open, setModal2Open] = useState(false);
  function openModal() {
    console.log("dataaa");
    setModal2Open(true);
  }
  return (
    <>
      <div className="px-5">
        <Button
          className="primary"
          onClick={openModal}
          icon={<PlusCircleOutlined />}
        >
          Add
        </Button>
      </div>
      <Modal
        title="Add Todo"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Form />
      </Modal>
    </>
  );
};

export default AddTodo;
