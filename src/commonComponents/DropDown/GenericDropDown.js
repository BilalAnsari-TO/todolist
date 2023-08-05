import React from "react";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
const items = [
  {
    key: "1",
    label: "Edit",
  },
  {
    key: "2",
    label: "Delete",
  },
];

const GenericDropDown = ({ icon, text }) => (
  <>
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Space>
          {text}
          {icon && icon}
        </Space>
      </a>
    </Dropdown>
  </>
);
export default GenericDropDown;
