import React from "react";
import Header from "../components/Header/Index";
import TodoList from "../components/TodoList/Index";
import TodoActions from "../components/TodoActions/Index";
import Footer from "../components/Footer/Index";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <TodoActions />
      <TodoList />
      <Footer />
    </div>
  );
};

export default Home;
