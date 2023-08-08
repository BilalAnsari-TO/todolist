import React from "react";
import { Dropdown, Menu, Space } from "antd";

const GenericDropDown = ({ icon, text, items, onClick }) => (
  <>
    <Dropdown
      overlay={<Menu>{items}</Menu>}
      trigger={["click"]}
      placement="bottomRight"
    >
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
