import React, { useState } from "react";
import DropDown from "../../commonComponents/DropDown/GenericDropDown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../API/TodoApi";
import {
  EllipsisOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Input, Menu, Modal } from "antd";

const Card = ({ title, description, priority, id }) => {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (data) => {
      queryClient.setQueryData(["todos", data.id], data);
      queryClient.invalidateQueries(["todos"], { exact: true });
    },
  });
  function handleDelete(e) {
    deleteTodoMutation.mutate({
      id: id,
    });
  }
  function handleedit() {
    setOpenModal(!openModal);
    setModal2Open(!modal2Open);
  }
  const items = [
    <Menu.Item key="edit" icon={<EditOutlined onClick={handleedit} />}>
      Edit
    </Menu.Item>,
    <Menu.Item key="delete" icon={<DeleteOutlined />} onClick={handleDelete}>
      Delete
    </Menu.Item>,
  ];
  const [modal2Open, setModal2Open] = useState(false);

  function onConfirm() {}

  return (
    <>
      <div className=" flex justify-items-center align-middle flex-col  w-72 min-w-min gap-5  ">
        <p
          className={`justify-self-cente text-2xl text-red-600 
          ${priority === "normal" && "text-green-400"}
          ${priority === "urgent" && "text-yellow-500"} 
          `}
        >
          {priority}
        </p>
        <div
          className={`rounded-lg flex flex-col text-black  h-52 min-h-fit  pt-2 px-5 pb-10 gap-7	bg-red-100  
          ${priority === "normal" && "bg-green-400"}
          ${priority === "urgent" && "bg-yellow-200"}  
           `}
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-normal	">{title}</h3>
            <DropDown
              items={items}
              icon={<EllipsisOutlined className="rotate-90" />}
            />
          </div>
          <div>{description}</div>
        </div>
      </div>
      <Modal
        body={
          <form className="flex justify-items-center align-middle flex-col gap-4">
            <div>
              <label htmlFor="title">Title</label>
              <Input id="title" />
            </div>
            <div>
              <label htmlFor="descriptions">Descriptions</label>
              <Input id="descriptions" />
            </div>
            {/* <GenericSelect items={items} ref={priorityRef} /> */}
            <select>
              <option value="urgent" selected="">
                urgent
              </option>
              <option value="normal">normal</option>
              <option value="ciritcal">ciritcal</option>
            </select>
            {/* <Select
              ref={priorityRef}
              defaultValue="ciritcal"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "urgent",
                  label: "urgent",
                },
                {
                  value: "normal",
                  label: "normal",
                },
                {
                  value: "ciritcal",
                  label: "ciritcal",
                },
              ]}
            /> */}
            <button className="primary">Create</button>
          </form>
        }
        onHide={openModal}
        show={modal2Open}
        title="Add todo"
        onConfirm={onConfirm}
      />
    </>
  );
};

export default Card;
