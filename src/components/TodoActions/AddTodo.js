import React, { useRef, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import Button from "../../commonComponents/Button/GenericButton";
import Form from "../../commonComponents/Form/GenericForm";
import Modal from "../../commonComponents/Modal/GenericModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../../API/TodoApi";
import { Input, Select } from "antd";
import GenericSelect from "../../commonComponents/Select/GenericSelect";
const items = [
  {
    value: "urgent",
    label: "urgent",
  },
  {
    value: "cirical",
    label: "cirical",
  },
  {
    value: "normal",
    label: "normal",
  },
];
const AddTodo = () => {
  const [modal2Open, setModal2Open] = useState(false);
  function openModal() {
    setModal2Open(!modal2Open);
  }
  function onConfirm() {}

  const titleRef = useRef();
  const descriptionRef = useRef();
  const priorityRef = useRef();
  const queryClient = useQueryClient();
  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: (data) => {
      queryClient.setQueryData(["todos", data.id], data);
      queryClient.invalidateQueries(["todos"], { exact: true });
      openModal();
      console.log("ref", priorityRef);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    createTodoMutation.mutate({
      title: titleRef.current.input.value,
      description: descriptionRef.current.input.value,
      priority: priorityRef?.current?.value,
    });
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
        body={
          <form
            className="flex justify-items-center align-middle flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="title">Title</label>
              <Input id="title" ref={titleRef} />
            </div>
            <div>
              <label htmlFor="descriptions">Descriptions</label>
              <Input id="descriptions" ref={descriptionRef} />
            </div>
            {/* <GenericSelect items={items} ref={priorityRef} /> */}
            <select ref={priorityRef}>
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
            <button className="primary" disabled={createTodoMutation.isLoading}>
              {createTodoMutation.isLoading ? "Loading..." : "Create"}
            </button>
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

export default AddTodo;
