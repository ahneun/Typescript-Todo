import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodo } from "../modules/todos";
import styled from "styled-components";
import { Todo } from "../types";

interface TodoIProps {
  todo: Todo;
  isActive: boolean;
}

const TodoI: React.FC<TodoIProps> = ({ todo, isActive }) => {
  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${todo.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

const dispatch = useDispatch();

const handleSwitchButton = () => dispatch(switchTodo(todo.id));

const handleRemoveButton = () => {
  if (window.confirm(CONFIRM_MESSAGE)) dispatch(deleteTodo(todo.id));
};

return (
  <StyledDiv>
    <FlexButtonBox>
      <TodoButton onClick={handleSwitchButton}>
        {isActive ? "완료" : "취소"}
      </TodoButton>
      <TodoButton onClick={handleRemoveButton}>삭제</TodoButton>
    </FlexButtonBox>
  </StyledDiv>
);
}

const StyledDiv = styled.div`
  padding: 30px 20px 30px 20px;
  width: 200px;
  margin: 10px;
  background-color: #f2e8ff;
  border-radius: 20px;
`;

const TodoButton = styled.button`
  background-color: #7684b8;
  width: 49%;
  height: 15px;
  color: white;
  font-weight: 500;
  height: 30px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
`;

const FlexButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;


export default TodoI