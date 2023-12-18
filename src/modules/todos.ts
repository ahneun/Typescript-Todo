
import { v4 as uuidv4 } from "uuid"


const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const SWITCH_TODO = 'todo/SWITCH_TODO';


interface TodoItem {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

const initialState: TodoItem[] = [
  {
    id: uuidv4(),
    title: "리액트",
    contents: "리액트 격파하기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "데이트",
    contents: "데이트하기",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "고냥이",
    contents: "고냥이 밥주기",
    isDone: true,
  },
];

export const addTodo = (payload: {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload: string) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const todos = (state: TodoItem[] = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todos;