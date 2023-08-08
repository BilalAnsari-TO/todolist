import React, { useState } from "react";
import { Form, Input } from "antd";
import Select from "../Select/GenericSelect";
import Button from "../Button/GenericButton";

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
const GenericForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { TextArea } = Input;
  return (
    <Form
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input todo title!",
          },
        ]}
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item
        label="Description"
        name="Description"
        rules={[
          {
            required: true,
            message: "Please input todo Description!",
          },
        ]}
      >
        <TextArea rows={4} placeholder="description" maxLength={8} />
      </Form.Item>
      <Form.Item
        label="Prioroty"
        name="Prioroty"
        rules={[
          {
            required: true,
            message: "Please input todo Prioroty!",
          },
        ]}
      >
        <Select items={items} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      ></Form.Item>
    </Form>
  );
};
export default GenericForm;
