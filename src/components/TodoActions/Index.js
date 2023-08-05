import React from "react";

import AddTodo from "./AddTodo";
import Search from "antd/es/input/Search";

const Index = () => {
  return (
    <>
      <div className="flex w-96 px-5">
        <Search />
        <AddTodo />
      </div>
    </>
  );
};

export default Index;
