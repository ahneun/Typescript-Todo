import React from "react";
import { useSelector } from "react-redux";
import TodoI from "./TodoI";

interface TodoItem {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

interface TodoListProps {
  isActive: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ isActive }) => {
  const todos: TodoItem[] = useSelector((state: { todos: TodoItem[] }) => state.todos);

  return (
    <div>
      <div>{isActive ? "해야 할 일" : "완료한 일"}</div>
      <div>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <TodoI key={item.id} todo={item} isActive={isActive} />;
          })}
      </div>
    </div>
  );
};

export default TodoList;