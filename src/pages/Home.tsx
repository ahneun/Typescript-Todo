import React from "react";
import TodoList from "../components/TodoList";
import Input from "../components/Input"

const Home = () => {
  return (
    <>
    <Input />
    <TodoList isActive={false} />
    </>
  )
};

export default Home;