import React from "react";
import Button from "../../commonComponents/Button/GenericButton";
import Customise from "./Customise";

const index = () => {
  return (
    <div>
      <div className="flex justify-between p-5 bg-regal-blue drop-shadow-xl ">
        <h1 className="text-white text-2xl	">My Todo List</h1>
        <Button className="link">{<Customise />}</Button>
      </div>
    </div>
  );
};

export default index;
