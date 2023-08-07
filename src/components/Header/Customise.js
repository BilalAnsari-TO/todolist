import React, { useState } from "react";
import { Modal } from "antd";
import GenericForm from "../../commonComponents/Form/GenericForm";

const Customise = () => {
  const [modal2Open, setModal2Open] = useState(false);
  // function openModal() {
  //   console.log("dataaa");
  //   setModal2Open(true);
  // }
  return (
    <div>
      Customise App
      <Modal
        title="Choose Colors"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <GenericForm />
      </Modal>
    </div>
  );
};

export default Customise;
