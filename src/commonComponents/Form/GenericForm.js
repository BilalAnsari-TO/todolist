import React, { useState } from "react";
import { Form, Input, Select } from "antd";
const GenericForm = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const TextArea = Input;
  return (
    <Form
      labelCol={{
        span: 4,
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
    >
      <Form.Item label="Title">
        <Input />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea rows={4} placeholder="description" maxLength={8} />
      </Form.Item>
      <Form.Item label="Prioroty">
        <Select>
          <Select.Option value="urgent">urgent</Select.Option>
          <Select.Option value="normal">normal</Select.Option>
          <Select.Option value="critical">critical</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};
export default GenericForm;
