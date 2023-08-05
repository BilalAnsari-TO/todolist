import React from "react";
import PropTypes from "prop-types";
import { Button, Space } from "antd";
import "./Button.css";

const GenericButton = ({
  size,
  type,
  icon,
  disabled,
  onClick,
  className,
  children,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button className={className} size={size} type={type} onClick={handleClick}>
      {icon && icon}
      {children}
    </Button>
  );
};

GenericButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

// Default Parameters
GenericButton.defaultProps = {
  size: "md",
  type: "danger",
  disabled: false,
  onClick: () => {},
};

export default GenericButton;
