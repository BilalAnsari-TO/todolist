import React from "react";
import DropDown from "../../commonComponents/DropDown/GenericDropDown";
import { EllipsisOutlined } from "@ant-design/icons";
const Card = ({ title, description, priority }) => {
  return (
    <>
      <div className=" flex justify-items-center align-middle flex-col  w-72 min-w-min gap-5  ">
        <p
          className={`justify-self-cente text-2xl text-red-600 
          ${priority === "normal" && "text-green-600"}
          ${priority === "urgent" && "text-yellow-500"} 
          `}
        >
          {priority}
        </p>
        <div
          className={`rounded-lg flex flex-col text-black  h-52 min-h-fit  pt-2 px-5 pb-10 gap-7	bg-red-100  
          ${priority === "normal" && "bg-green-200"}
          ${priority === "urgent" && "bg-yellow-200"}  
           `}
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-normal	">{title}</h3>
            <DropDown icon={<EllipsisOutlined className="rotate-90" />} />
          </div>
          <div>{description}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
