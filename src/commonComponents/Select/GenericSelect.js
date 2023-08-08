import React, { useState } from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const GenericSelect = ({ items }) => {
  return (
    <Space wrap>
      <Select
        defaultValue="normal"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={items}
      />
    </Space>
  );
};
export default GenericSelect;
